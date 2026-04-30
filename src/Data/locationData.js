export const locationData = {
  leeds: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Locations" },
      { label: "Leeds" },
    ],
    badge: "YORKSHIRE & BEYOND",
    title: "Home Insulation Across Yorkshire",
    intro: [
      "Yorkshire Insulation provides loft, cavity wall, spray foam, solid wall, and underfloor insulation across Yorkshire and the surrounding regions. We help homeowners reduce heat loss, lower energy bills, and improve comfort - whatever the property type.",
      "We know Yorkshire housing inside out - from Victorian terraces in Leeds and Bradford to stone cottages in the Dales and modern estates across Sheffield and Wakefield. Get in touch and we'll advise on the best option for your property.",
    ],
    heroBackgroundImage: "/heroimage.jpeg",
    whatsappLabel: "Get a Quote via WhatsApp",
    whatsappLink: "https://wa.me/447526322379",
    contactDetails: {
      phoneLabel: "07526322379",
      phoneHref: "tel:+447526322379",
      emailLabel: "info@yorkshireinsulationsolutions.co.uk",
      emailHref: "mailto:info@yorkshireinsulationsolutions.co.uk",
    },
    form: {
      title: "Get in touch",
      submitLabel: "Send Enquiry",
      fields: {
        fullName: {
          label: "Full name",
          placeholder: "Full name",
          type: "text",
        },
        phone: {
          label: "Phone number",
          placeholder: "Phone number",
          type: "tel",
        },
        address: {
          label: "Property address",
          placeholder: "Your property address",
          type: "text",
        },
        service: {
          label: "Select a service",
          placeholder: "Select a service",
          options: [
            "Loft Insulation",
            "Cavity Wall Insulation",
            "Spray Foam Removal",
            "Underfloor Insulation",
            "New Build Insulation"
          ],
        },
        note: {
          label: "Property details",
          placeholder: "Tell us about your property",
          rows: 5,
        },
      },
    },
    housingTypes: {
      badge: "YORKSHIRE HOUSING",
      title: "Insulation for Every Yorkshire Property Type",
      intro:
        "Yorkshire has one of the most varied housing stocks in the country. The right insulation depends on your property - its age, construction type, and how it was built. We work across all of them.",
      items: [
        {
          icon: "terrace",
          title: "Victorian terraces",
          subtitle: "Pre-1919, solid brick walls, no cavity",
          points: [
            "Solid wall insulation",
            "Loft insulation",
            "Underfloor insulation",
          ],
        },
        {
          icon: "semi",
          title: "1930s - 1980s semis",
          subtitle: "Cavity walls, often unfilled",
          points: [
            "Cavity wall insulation",
            "Loft insulation",
            "Underfloor insulation",
          ],
        },
        {
          icon: "newbuild",
          title: "New builds",
          subtitle: "Post-2000 construction",
          points: [
            "Top-up loft insulation",
            "Spray foam for gaps",
            "Underfloor upgrades",
          ],
        },
        {
          icon: "stone",
          title: "Stone cottages",
          subtitle: "Rural & village properties",
          points: [
            "External wall insulation",
            "Solid wall insulation",
            "Loft insulation",
          ],
        },
        {
          icon: "apartment",
          title: "Flats & apartments",
          subtitle: "Including converted properties",
          points: [
            "Loft / roof insulation",
            "Cavity wall insulation",
            "Spray foam solutions",
          ],
        },
        {
          icon: "estate",
          title: "1980s - 2000s estates",
          subtitle: "Mix of cavity and solid wall",
          points: [
            "Cavity wall insulation",
            "Loft insulation",
            "External wall insulation",
          ],
        },
      ],
    },
    services: {
      badge: "OUR SERVICES",
      title: "What We Install Across Yorkshire",
      intro:
        "We cover every major insulation type across Yorkshire and the surrounding regions.",
      items: [
        {
          title: "Loft Insulation",
          description:
            "The fastest win for most Leeds homes. Most jobs done in a day. Save energy and reduce bills with professional loft insulation.",
        },
        {
          title: "Cavity Wall Insulation",
          description:
            "Ideal for the high volume of 1930-1980 semis and terraces across Leeds. Reduce heat loss through your walls.",
        },
        {
          title: "Solid Wall Insulation",
          description:
            "Essential for pre-1919 Leeds housing with no cavity to fill. Improve thermal efficiency of solid brick walls.",
        },
        {
          title: "Room in Roof Insulation",
          description:
            "Perfect for conversions and rooms in the roof. Maximise comfort in your attic space.",
        },
        {
          title: "External Wall Insulation",
          description:
            "For properties where internal or cavity solutions aren't viable. Enhance appearance and thermal performance.",
        },
        {
          title: "Internal Wall Insulation",
          description:
            "Internal wall insulation solutions for properties where external options aren't suitable.",
        },
        {
          title: "Floor Insulation",
          description:
            "Reduce heat loss through solid and suspended timber floors in your Leeds property.",
        },
        {
          title: "Spray Foam Insulation",
          description:
            "Fills every gap. Effective for older and irregular roof spaces.",
        }
      ],
    },
    areasCovered: {
      badge: "Areas Covered",
      title: "Areas We Cover",
      intro: " Based in Yorkshire, we work across the region and into Lancashire and the Midlands. Not sure if we cover your area? Get in touch and we'll confirm.",
      city: "West Yorkshire",
      items: [
        "Leeds City Centre",
        "Headingley",
        "Hyde Park",
        "Woodhouse",
        "Meanwood",
        "Chapel Allerton",
        "Roundhay",
        "Moortown",
        "Alwoodley",
        "Wetherby",
        "Garforth",
        "Rothwell",
        "Beeston",
        "Holbeck",
        "Hunslet",
        "Burley",
        "Kirkstall",
        "Bramley",
        "Armley",
        "Stanningley",
        "Pudsey",
        "Morley",
        "Horsforth",
        "Seacroft",
        "Otley",
        "LS1 - LS29"
      ],
      // New secondary regions
      additionalRegions: [
        {
          label: "Yorkshire",
          locations: ["York",
            "Harrogate",
            "Ripon",
            "Hull",
            "Sheffield",
            "Rotherham",
            "Barnsley",
            "Doncaster",
            "Wakefield",
            "Huddersfield",
            "Halifax",
            "Bradford",
            "Middlesbrough"]
        },
        {
          label: "Lancashire & The Midlands",
          locations: ["Burnley",
            "Blackburn",
            "Preston",
            "Nottingham",
            "Mansfield"]
        }
      ]
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does insulation installation take?",
          answer:
            "That depends on the type of insulation and the size of your property. Most loft and cavity wall installations are completed in a single day. Larger jobs such as external wall insulation may take longer - we'll give you a clear timeframe before any work begins.",
        },
        {
          question: "Which insulation is best for older properties?",
          answer:
            "That depends on how the property was built. Pre-1919 solid brick properties typically suit loft, underfloor, or solid wall insulation. Post-1920s semis and terraces with an unfilled cavity are usually ideal for cavity wall insulation. We'll assess your property and recommend the right solution.",
        },
        {
          question: "What areas do you cover?",
          answer:
            "We're based in Yorkshire and cover the wider region including West Yorkshire, South Yorkshire, North Yorkshire, and East Yorkshire. We also work across parts of Lancashire and the Midlands. If you're unsure whether we cover your area, get in touch and we'll confirm.",
        },
        {
          question: "How do I know which insulation is right for my property?",
          answer:
            "We assess every property individually. The right solution depends on your property's age, construction type, wall type, and current insulation levels. Get in touch and we'll talk you through the options before any work is booked.",
        },
        {
          question: "Are there government grants available for insulation?",
          answer:
            "There are various government schemes that may help with the cost of insulation depending on your circumstances, including the Great British Insulation Scheme and ECO4. Eligibility varies - we'd recommend checking the government website or speaking to us and we can point you in the right direction.",
        },
        {
          question: "How much could insulation save on my energy bills?",
          answer:
            "Savings vary depending on your property type, current insulation levels, and energy usage. Insulation can significantly reduce the amount of heat lost through walls, roofs, and floors - which directly impacts what you spend on heating. We'll give you an honest assessment based on your specific property.",
        },
        {
          question: "How do I get started?",
          answer:
            "Get in touch via the form on this page, by phone, or on WhatsApp. Tell us about your property and we'll take it from there.",
        },
      ],
    },
    seo: {
      title: "Areas We Cover - Yorkshire Insulation",
      description:
        "Yorkshire Insulation covers West Yorkshire, South Yorkshire, North Yorkshire, Lancashire and the Midlands. Get in touch to confirm your area.",
      keywords:
        "Leeds insulation, loft insulation Leeds, cavity wall Leeds, insulation Yorkshire, loft insulation Sheffield, cavity wall Bradford, insulation Hull, insulation Harrogate, insulation Nottingham, insulation Lancashire",
      canonical: "https://insulateyorkshire.co.uk/locations",
      geo: {
        region: "GB-YOR",
        placename: "Yorkshire",
        position: "53.8;-1.5",
      },
    },
  },
};

export default locationData;
