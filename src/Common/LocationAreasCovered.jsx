import { useState, useEffect, useRef, useCallback } from "react";

const headingStyle = { fontFamily: "Montserrat, sans-serif" };

const COORDS = {
  "Leeds City Centre": [53.7997, -1.5492],
  "Headingley": [53.8195, -1.5779],
  "Hyde Park": [53.8094, -1.5617],
  "Woodhouse": [53.8117, -1.5538],
  "Meanwood": [53.8262, -1.5584],
  "Chapel Allerton": [53.8306, -1.5243],
  "Roundhay": [53.8355, -1.5051],
  "Moortown": [53.8395, -1.5329],
  "Alwoodley": [53.8515, -1.5229],
  "Wetherby": [53.9093, -1.3875],
  "Garforth": [53.7924, -1.3867],
  "Rothwell": [53.7522, -1.4847],
  "Beeston": [53.7722, -1.5667],
  "Holbeck": [53.7908, -1.5541],
  "Hunslet": [53.7726, -1.5344],
  "Burley": [53.8054, -1.5741],
  "Kirkstall": [53.8131, -1.5964],
  "Bramley": [53.8108, -1.6232],
  "Armley": [53.7994, -1.5881],
  "Stanningley": [53.8059, -1.6386],
  "Pudsey": [53.8018, -1.6628],
  "Morley": [53.7474, -1.5980],
  "Horsforth": [53.8368, -1.6370],
  "Seacroft": [53.8207, -1.4598],
  "Otley": [53.9045, -1.6917],
  "LS1 - LS29": [53.7997, -1.5492],
  "York": [53.9590, -1.0815],
  "Harrogate": [53.9921, -1.5364],
  "Ripon": [54.1384, -1.5231],
  "Hull": [53.7457, -0.3367],
  "Sheffield": [53.3811, -1.4701],
  "Rotherham": [53.4300, -1.3566],
  "Barnsley": [53.5534, -1.4797],
  "Doncaster": [53.5228, -1.1285],
  "Wakefield": [53.6830, -1.4977],
  "Huddersfield": [53.6458, -1.7850],
  "Halifax": [53.7248, -1.8609],
  "Bradford": [53.7960, -1.7594],
  "Middlesbrough": [54.5742, -1.2350],
  "Burnley": [53.7890, -2.2380],
  "Blackburn": [53.7480, -2.4820],
  "Preston": [53.7632, -2.7031],
  "Nottingham": [52.9548, -1.1581],
  "Mansfield": [53.1440, -1.1960],
};

const GROUP_COLORS = {
  "west-yorkshire": "#d4a017",
  "Yorkshire": "#4a9eff",
  "Lancashire & The Midlands": "#5dca9f",
};

function getGroup(loc, data) {
  if (data.items.includes(loc)) return "west-yorkshire";
  for (const r of data.additionalRegions) {
    if (r.locations.includes(loc)) return r.label;
  }
  return "west-yorkshire";
}

function makeIcon(L, color, active) {
  const size = active ? 16 : 11;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size + 8}" height="${size + 8}" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="${size / 2 + 3}" fill="${color}" opacity="0.25"/>
    <circle cx="12" cy="12" r="${size / 2}" fill="${color}"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size + 8, size + 8],
    iconAnchor: [(size + 8) / 2, (size + 8) / 2],
  });
}

const MAP_STYLES = `
  .lac-popup .leaflet-popup-content-wrapper {
    background: #0f1f3d !important;
    color: #fff !important;
    border: 1px solid rgba(212,160,23,0.5) !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    padding: 0 !important;
  }
  .lac-popup .leaflet-popup-content {
    margin: 10px 14px !important;
    font-family: Montserrat, sans-serif !important;
    font-size: 13px !important;
    font-weight: 700 !important;
  }
  .lac-popup .leaflet-popup-tip-container .leaflet-popup-tip {
    background: #0f1f3d !important;
  }
  .lac-popup .leaflet-popup-close-button {
    color: rgba(255,255,255,0.4) !important;
    top: 4px !important;
    right: 6px !important;
  }
  .leaflet-control-zoom a {
    background: #162848 !important;
    color: #d4a017 !important;
    border-color: rgba(255,255,255,0.15) !important;
    font-weight: 700 !important;
  }
  .leaflet-control-zoom a:hover {
    background: #1e3460 !important;
  }
  .leaflet-control-attribution {
    background: rgba(15,31,61,0.85) !important;
    color: rgba(255,255,255,0.3) !important;
    font-size: 9px !important;
  }
  .leaflet-control-attribution a {
    color: rgba(255,255,255,0.4) !important;
  }
  .leaflet-tile-pane {
    filter: saturate(0.6) brightness(0.78) hue-rotate(190deg);
  }
  @keyframes lac-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

function MapPanel({ data, activeLocation, onMarkerClick }) {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);
  const markersRef = useRef({});
  const [ready, setReady] = useState(false);
  const [footer, setFooter] = useState("Showing all covered areas");

  useEffect(() => {
    if (instanceRef.current || !mapRef.current) return;

    function init() {
      const L = window.L;
      const map = L.map(mapRef.current, {
        center: [53.8, -1.55],
        zoom: 8,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      const allLocs = [
        ...data.items,
        ...data.additionalRegions.flatMap((r) => r.locations),
      ];

      allLocs.forEach((loc) => {
        const c = COORDS[loc];
        if (!c) return;
        const group = getGroup(loc, data);
        const color = GROUP_COLORS[group] || "#d4a017";
        const marker = L.marker(c, { icon: makeIcon(L, color, false) })
          .addTo(map)
          .bindPopup(
            `<span style="color:${color}">${loc}</span>`,
            { className: "lac-popup", closeButton: true }
          );
        marker.on("click", () => {
          onMarkerClick(loc);
          setFooter(`Viewing: ${loc}`);
        });
        markersRef.current[loc] = { marker, color };
      });

      instanceRef.current = map;
      setReady(true);
    }

    if (window.L) {
      init();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = init;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!ready || !instanceRef.current) return;
    const L = window.L;
    const map = instanceRef.current;

    Object.entries(markersRef.current).forEach(([loc, { marker, color }]) => {
      marker.setIcon(makeIcon(L, color, loc === activeLocation));
    });

    if (activeLocation && activeLocation !== "LS1 - LS29") {
      const c = COORDS[activeLocation];
      if (c) {
        const zoom = data.items.includes(activeLocation) ? 13 : 11;
        map.flyTo(c, zoom, { duration: 0.7 });
        markersRef.current[activeLocation]?.marker.openPopup();
        setFooter(`Viewing: ${activeLocation}`);
      }
    } else if (!activeLocation) {
      map.flyTo([53.8, -1.55], 8, { duration: 0.7 });
      Object.values(markersRef.current).forEach(({ marker }) => marker.closePopup());
      setFooter("Showing all covered areas");
    }
  }, [activeLocation, ready]);

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border border-white/12"
      style={{ background: "#162848" }}
    >
      <style>{MAP_STYLES}</style>

      {/* Header */}
      <div
        className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: "#d4a017", ...headingStyle }}
      >
        <span
          className="h-2 w-2 rounded-full flex-shrink-0"
          style={{ background: "#d4a017", animation: "lac-pulse 2s infinite" }}
        />
        Coverage Map — click any location to zoom
      </div>

      {/* Map */}
      <div ref={mapRef} style={{ height: 320, width: "100%" }} />

      {/* Legend + footer */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {[
            { label: "West Yorkshire", color: "#d4a017" },
            { label: "Yorkshire", color: "#4a9eff" },
            { label: "Lancs & Midlands", color: "#5dca9f" },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                style={{ background: color }}
              />
              <span className="text-[11px] text-white/50" style={headingStyle}>
                {label}
              </span>
            </div>
          ))}
          <span
            className="ml-auto text-[11px] text-white/35 hidden sm:block"
            style={headingStyle}
          >
            {footer}
          </span>
        </div>
      </div>
    </div>
  );
}

const SectionBadge = ({ children }) => (
  <span
    className="inline-flex rounded-md border border-white/18 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-gold)]"
    style={headingStyle}
  >
    {children}
  </span>
);

const Chip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={headingStyle}
    className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-[7px] text-[13px] font-medium transition-all
      ${
        active
          ? "border-[var(--brand-gold)]/60 bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]"
          : "border-white/14 bg-white/6 text-white/84 hover:border-white/30 hover:bg-white/10"
      }`}
  >
    {label}
  </button>
);

const LocationAreasCovered = ({ data }) => {
  const [activeLocation, setActiveLocation] = useState(null);

  if (!data) return null;

  const handleChip = (loc) => {
    setActiveLocation((prev) => (prev === loc ? null : loc));
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-navy)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(46,79,163,0.28),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">

        <SectionBadge>{data.badge}</SectionBadge>

        <h2
          className="mt-7 max-w-5xl text-4xl font-extrabold tracking-[-0.03em] md:text-[52px]"
          style={headingStyle}
        >
          {data.title}
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-white/76 md:text-xl">
          {data.intro}
        </p>

        {/* West Yorkshire */}
        <div className="mt-8">
          <h3
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-gold)]"
            style={headingStyle}
          >
            {data.city}
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.items.map((item) => (
              <Chip
                key={item}
                label={item}
                active={activeLocation === item}
                onClick={() => handleChip(item)}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-white/18 to-transparent" />
          <span
            className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.3em] text-white/35"
            style={headingStyle}
          >
            We also cover across Yorkshire &amp; beyond
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-white/18 to-transparent" />
        </div>

        {/* Bottom grid: regions left, map right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">

          {/* Left col */}
          <div className="flex flex-col gap-8">
            <div className="space-y-7">
              {data.additionalRegions?.map((region) => (
                <div key={region.label}>
                  <h3
                    className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--brand-gold)]"
                    style={headingStyle}
                  >
                    {region.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {region.locations.map((loc) => (
                      <Chip
                        key={loc}
                        label={loc}
                        active={activeLocation === loc}
                        onClick={() => handleChip(loc)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA box */}
            <div className="flex flex-col gap-5 rounded-[10px] border border-white/12 bg-black/10 px-5 py-5 text-[13px] leading-7 text-white/72 sm:flex-row sm:items-center sm:justify-between">
              <p>
                We cover Yorkshire and beyond — with practical recommendations
                based on the age, build type, and condition of your property.
                Not sure if we cover your area?
              </p>
              <a
                href="#home"
                className="whitespace-nowrap rounded border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-6 py-3 text-[12px] font-bold uppercase tracking-wider text-[var(--brand-gold)] transition-all hover:bg-[var(--brand-gold)] hover:text-white"
                style={headingStyle}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right col — sticky map */}
          <div className="lg:sticky lg:top-8">
            <MapPanel
              data={data}
              activeLocation={activeLocation}
              onMarkerClick={handleChip}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationAreasCovered;