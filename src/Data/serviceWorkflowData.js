export const serviceWorkflowData = {
  loftInsulation: {
    badge: "Service Details",
    aboutService: {
      title: "About This Service",
      intro:
        "At Yorkshire Insulation, we install loft insulation for homeowners across the region - from standard top-up installations to full loft clearances and complete re-insulations. Whether your loft is boarded, unboarded, or has existing insulation that needs replacing, we'll assess what's needed and get it done properly.",
      features: [
        "Reduces heat loss through the roof by up to 25%",
        "Helps maintain a consistent temperature throughout your home",
        "Suitable for most property types across Yorkshire",
        "Installed cleanly with minimal disruption to your home",
        "Completed in most cases within a single day",
      ],
      outro:
        "We work to current building regulations and recommended insulation depths - so the job is done right first time.",
      includedTitle: "What is included?",
      includedIntro: "Our loft insulation service includes:",
      includedItems: [
        "Property assessment - we check your loft space, existing insulation, and access before any work begins",
        "Preparation - we clear the area and prepare the loft for installation",
        "Installation - insulation is laid between and over the joists to the recommended depth",
        "Finishing - we leave the loft tidy and accessible with everything back in place",
        "Aftercare advice - we walk you through what's been done and answer any questions",
      ],
      includedOutro:
        "Every job is carried out by our trained installers to a consistent, high standard.",
    },
    howWeWork: null,
    benefits: {
      badge: "Benefits",
      title: "Service Benefits",
      intro: "Choosing Yorkshire Insulation for your loft means:",
      items: [
        "Lower energy bills - reduce the amount of heat escaping through your roof",
        "A warmer home throughout the colder months",
        "Improved EPC rating - valuable if you're planning to sell or let your property",
        "Fast, clean installation with minimal disruption",
        "Installed by an accredited local team who know Yorkshire properties",
      ],
      outro:
        "We take the time to do it properly - because a well-insulated home makes a real difference to the people living in it.",
      image: "/heroimage.jpeg",
      imageAlt: "Completed loft insulation Yorkshire property",
    },
    contactForm: {
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
          options: ["Loft Insulation"],
        },
        note: {
          label: "Short Note",
          placeholder: "Tell us about your property",
          rows: 4,
        },
      },
      submitButton: "Get a Quote Today",
    },
    colors: {
      primary: "#F21B23",
      secondary: "#404143",
    },
  },
};
