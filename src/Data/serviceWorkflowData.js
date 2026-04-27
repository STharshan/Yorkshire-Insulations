const contactForm = (service) => ({
  title: "Get In Touch",
  whatsappLink: "https://wa.me/447590250335",
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Full Name",
      type: "text",
    },
    phone: {
      label: "Phone",
      placeholder: "Phone",
      type: "tel",
    },
    service: {
      label: "Select a Service",
      options: [service],
    },
    note: {
      label: "Short Note",
      placeholder: "Tell us about your property",
      rows: 4,
    },
  },
  submitButton: "Get a Quote Today",
});

const colors = {
  primary: "#F21B23",
  secondary: "#404143",
};

export const serviceWorkflowData = {
  loftInsulation: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we install loft insulation for homeowners across the region - from standard top-up installations to full loft clearances and complete re-insulations. Whether your loft is boarded, unboarded, or has existing insulation that needs replacing, we'll assess what's needed and get it done properly.\n\nWe use Knauf Loft Roll 44 and Knauf Combi Cut insulation - installed to the recommended depth of between 270mm and 450mm. It's one of the most effective ways to improve your home's energy efficiency, with an uninsulated home typically losing 25% of its heat through the roof.",
      features: [
        "Reduces heat loss through the roof by up to 25%",
        "Helps maintain a consistent temperature throughout your home",
        "Suitable for most property types across Yorkshire",
        "Installed cleanly with minimal disruption to your home",
        "Completed in most cases within a single day",
      ],
      outro:
        "We work to current building regulations and recommended insulation depths - so the job is done right first time.",
      pricingSignal: {
        text:
          "Loft insulation top-ups are VAT-exempt under the ECO scheme. For full pricing including loft boarding and hatch options, visit our pricing page.",
        ctaLabel: "Request pricing",
        ctaHref: "/#contact",
      },
      includedTitle: "What is Included?",
      includedIntro: "Our loft insulation service includes:",
      includedItems: [
        "Property assessment - we check your loft space, existing insulation, and access before any work begins",
        "Preparation - we clear the area and prepare the loft for installation",
        "Installation - insulation is laid between and over the joists to the recommended depth using Knauf Loft Roll 44 or Knauf Combi Cut",
        "Finishing - we leave the loft tidy and accessible with everything back in place",
        "Aftercare advice - we walk you through what's been done and answer any questions",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
      extras: {
        title: "Additional Extras",
        intro: "We also offer a range of loft extras to make the most of your space:",
        items: [
          "Loft boarding - priced at £50 + VAT per sqm - includes boards, batons, screws and fixings",
          "Loft hatch installation - standard hatches and ladder options available - from £250 + VAT installed",
        ],
      },
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro: "Choosing Yorkshire Insulation for your loft means:",
      items: [
        "Lower energy bills - reduce the amount of heat escaping through your roof - top-ups to 270mm can pay for themselves in energy savings within a few years",
        "A warmer home - prevents heat escaping through the roof and acts as a barrier in summer, keeping a consistent temperature year-round",
        "Reduced condensation and damp - removes cold spots on ceilings, minimising the risk of damp patches and mould growth",
        "Improved EPC rating - valuable if you're planning to sell or let your property",
        "Installed by an accredited local team - who know Yorkshire properties",
      ],
      outro:
        "We take the time to do it properly - because a well-insulated home makes a real difference to the people living in it.",
      image: "/heroimage.jpeg",
      imageAlt: "Completed loft insulation in a Yorkshire property",
    },
    relatedServices: [
      { title: "Spray Foam Removal", href: "/services/spray-foam-removal" },
      { title: "Underfloor Insulation", href: "/services/underfloor-insulation" },
    ],
    contactForm: contactForm("Loft Insulation"),
    colors,
  },
  cavityWallInsulation: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we install cavity wall insulation for homeowners across the region - filling the gap between your inner and outer walls to significantly reduce heat loss. Whether your walls have never been insulated or your existing fill has sagged and needs extracting, we'll check what's needed and get it sorted properly.\n\nWe use Superbead 33 - a high-performance cavity wall insulation system made from carbon-enhanced expanded polystyrene (EPS) beads bonded with adhesive. It offers excellent thermal performance, resists moisture, and is designed to last the lifetime of the building.",
      features: [
        "Thermal conductivity of 0.033 W/mK - market-leading performance",
        "Resists moisture and prevents settling over time",
        "Approved for residential properties across the UK",
        "Reduces heat loss through walls and improves energy efficiency",
        "Installed cleanly with no internal work required",
      ],
      outro:
        "We work to current building regulations and use only approved materials - so the job is done right first time.",
      pricingSignal: {
        text:
          "Cavity wall insulation starts from £23 per sqm depending on cavity depth - full pricing and assessment details are available on our pricing page.",
        ctaLabel: "Request pricing",
        ctaHref: "/#contact",
      },
      includedTitle: "What is Included?",
      includedIntro: "Our cavity wall insulation service includes:",
      includedItems: [
        "Assessment appointment - we check whether you have a suitable cavity, whether existing fill needs extracting, measure cavity depth, and measure the walls that require treatment - £100 + VAT, deducted from your final bill",
        "Preparation - we identify and drill a predetermined pattern of injection holes into the external wall",
        "Injection - Superbead 33 EPS beads and bonding adhesive are injected simultaneously into the cavity, forming a stable, breathable insulation layer",
        "Finishing - injection holes are sealed with mortar to match the existing wall - no visible difference from outside",
        "Aftercare advice - we walk you through what's been done and answer any questions",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro: "Choosing Yorkshire Insulation for your cavity walls means:",
      items: [
        "Lower energy bills - reduce heat loss through your walls and see the difference on your energy costs",
        "A warmer, more consistent home - cavity wall insulation is one of the most effective improvements you can make",
        "Improved EPC rating - valuable if you're planning to sell or let your property",
        "No disruption inside your home - all work is done externally - no mess, no decorating required",
        "Installed by an accredited local team - who know Yorkshire properties and work to current building regulations",
      ],
      outro:
        "We take the time to do it properly - because a well-insulated home makes a real difference to the people living in it.",
      image: "/Cavity_walls.jpeg",
      imageAlt: "Cavity wall insulation completed on a Yorkshire property",
    },
    relatedServices: [
      { title: "Loft Insulation", href: "/services/loft-insulation" },
      { title: "Underfloor Insulation", href: "/services/underfloor-insulation" },
    ],
    contactForm: contactForm("Cavity Wall Insulation"),
    colors,
  },
  sprayFoamRemoval: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we remove spray foam insulation from lofts across the region - safely and thoroughly. Spray foam removal is increasingly necessary as a quarter of major UK lenders currently refuse to lend on properties with it installed. Whether you're trying to sell your home, remortgage, or simply want the foam removed, we have the experience and equipment to get it done properly.\n\nWe recommend removing any existing insulation from the loft space at the same time - when the foam comes out it gets everywhere, and it's impossible to clean up properly with other insulation in the way. Once everything is clear, we can relay brand new insulation and leave your loft space fresh.",
      features: [
        "Removes open cell and closed cell spray foam",
        "Provides a removal certificate - accepted by mortgage lenders",
        "Clears damaged or contaminated existing insulation at the same time",
        "Any damaged timber is repaired to restore structural integrity",
        "New insulation relay available once removal is complete",
      ],
      outro:
        "We work carefully and cleanly - because spray foam removal needs to be done properly to satisfy lenders and protect your property.",
      pricingSignal: {
        text:
          "Spray foam removal starts from £52 per sqm for open cell and from £80 per sqm for closed cell - full pricing is available on our pricing page.",
        ctaLabel: "Request pricing",
        ctaHref: "/#contact",
      },
      includedTitle: "What is Included?",
      includedIntro: "Our spray foam removal service includes:",
      includedItems: [
        "Professional assessment - a qualified surveyor identifies the foam type, open or closed cell, and checks for any existing timber damage before work begins",
        "Preparation - we protect the loft space and clear existing insulation where required to allow safe, thorough removal",
        "Extraction - specialists use manual scraping and mechanical tools to peel foam from the rafters and joists",
        "Cleaning and repair - residue is removed, and any damaged timber is repaired to restore structural integrity",
        "Certification - we provide a removal certificate on completion - essential for satisfying mortgage lenders",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
      callout: {
        title: "Why does spray foam cause mortgage problems?",
        text:
          "Around a quarter of major UK lenders currently refuse to lend on properties with spray foam insulation installed. This can block sales, remortgages, and equity releases. A professional removal with a certificate from a reputable firm resolves this.",
      },
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro: "Choosing Yorkshire Insulation for spray foam removal means:",
      items: [
        "Clears the way for mortgage approvals and property sales - a common blocker resolved properly",
        "A removal certificate issued on completion - accepted by major UK mortgage lenders",
        "Timber repairs included where needed - structural integrity restored as part of the job",
        "Existing insulation cleared at the same time - leaving your loft space completely clean",
        "New insulation available straight after - relay of fresh insulation available once foam is removed",
      ],
      outro:
        "We take the time to do it properly - because the wrong insulation can cause as many problems as none at all.",
      image: "/about2.webp",
      imageAlt: "Spray foam removed from a Yorkshire loft space",
    },
    relatedServices: [
      { title: "Loft Insulation", href: "/services/loft-insulation" },
      { title: "New Build Insulation", href: "/services/new-build-insulation" },
    ],
    contactForm: contactForm("Spray Foam Removal"),
    colors,
  },
  underfloorInsulation: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we install underfloor insulation for homeowners across the region. If your property has a basement, cellar, or crawl space, we can install Rockwool insulation - stapled and netted beneath your floor to stop draughts and retain heat. We also install Kingspan rigid board insulation beneath floors prior to underfloor heating being laid.\n\nIt's an often-overlooked area that can make a real difference to draught control, heat retention, and overall comfort - especially in older properties.",
      features: [
        "Suitable for basements, cellars, and crawl space properties",
        "Rockwool insulation stapled and netted - stops draughts and retains heat",
        "Kingspan rigid board available for underfloor heating prep",
        "Installed without disruption to your flooring above",
        "Suitable for older properties and new builds alike",
      ],
      outro:
        "We'll assess your property and recommend the right product and approach for your floor type and situation.",
      includedTitle: "What is Included?",
      includedIntro: "Our underfloor insulation service includes:",
      includedItems: [
        "Property assessment - we check your floor type, void depth, and access before recommending the right solution",
        "Preparation - we clear the void or subfloor area and prepare for installation",
        "Installation - Rockwool is stapled and netted between joists, or Kingspan board is laid to the required depth ahead of underfloor heating",
        "Finishing - access points are closed and the area is left clean and tidy",
        "Aftercare advice - we walk you through what's been done and answer any questions",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro: "Choosing Yorkshire Insulation for your underfloor means:",
      items: [
        "Stops draughts through the floor - particularly effective in older properties with suspended floors",
        "Improved heat retention at ground level - a noticeably warmer floor throughout your home",
        "Prepares your floor correctly for underfloor heating - Kingspan laid to specification before pipes are installed",
        "Installed without disruption to your living space - all work carried out beneath the floor",
        "Installed by an accredited local team - who know Yorkshire properties",
      ],
      outro:
        "We take the time to do it properly - because a well-insulated home makes a real difference to the people living in it.",
      image: "/about1.webp",
      imageAlt: "Underfloor insulation installed beneath a Yorkshire home",
    },
    relatedServices: [
      { title: "Loft Insulation", href: "/services/loft-insulation" },
      { title: "Cavity Wall Insulation", href: "/services/cavity-wall-insulation" },
    ],
    contactForm: contactForm("Underfloor Insulation"),
    colors,
  },
  newBuildInsulation: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we work directly with contractors and developers on new build projects and full property renovations across the region. Whether the site is a fresh build or a complete gut renovation, we can price the insulation package per square metre - supply and fit, or labour only if you're providing the material.\n\nWe're experienced working alongside build programmes and can schedule around your timeline so insulation never holds up the next trade.",
      features: [
        "Priced per sqm - supply and fit or labour only",
        "Kingspan rigid board and Rockwool mineral wool both available",
        "Suitable for new builds, full renovations, and building sites",
        "Scheduled to fit your build programme",
        "Experienced working to architect and structural specifications",
      ],
      outro:
        "We work with contractors who need insulation done right, done cleanly, and done to programme.",
      includedTitle: "What is Included?",
      includedIntro: "Our new build insulation service includes:",
      includedItems: [
        "Project review - we review your drawings, specifications, and required performance levels to confirm the right product and build-up",
        "Pricing - we provide a clear per-sqm price based on product, thickness, and application - supply and fit or labour only",
        "Scheduling - we agree installation dates that fit your programme and won't delay the next trade on site",
        "Installation - insulation is installed to specification across all required elements of the build",
        "Documentation - we provide any required product and installation records for building control sign-off",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro:
        "Choosing Yorkshire Insulation for your new build or renovation means:",
      items: [
        "Clear per-sqm pricing with no surprises - supply and fit or labour only - whatever works for your project",
        "Kingspan and Rockwool both available - we'll recommend the right product for each application",
        "Reliable scheduling - we work around your programme so insulation doesn't hold up the site",
        "Documentation provided for building control - no chasing paperwork at handover",
        "A local team you can rely on - experienced working with contractors across Yorkshire",
      ],
      outro:
        "We take the time to do it properly - because on a build programme, one trade done right keeps everything else moving.",
      image: "/heroimage.jpeg",
      imageAlt: "New build insulation installed on a Yorkshire construction site",
    },
    relatedServices: [
      { title: "Cavity Wall Insulation", href: "/services/cavity-wall-insulation" },
      { title: "Underfloor Insulation", href: "/services/underfloor-insulation" },
    ],
    contactForm: contactForm("New Build Insulation"),
    colors,
  },
};
