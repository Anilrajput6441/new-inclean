export type Product = {
  id: number;
  name: string;
  slug: string;
  summary: string;
  image: string;
  intro: string[];
  sections: {
    title: string;
    body: string;
  }[];
};

export type Project = {
  id: number;
  title: string;
  href: string;
  summary: string;
  image: string;
};

const uploads = "/wp-content/uploads";

export const contactInfo = {
  address: "166- Ground floor Godadara Road, Surat, Gujarat-395210",
  email: "info@inclean.in",
  phone: "+91-9871348767",
  alternatePhone: "+91-8744811551",
  website: "www.inclean.in",
  brochure: `${uploads}/2023/03/Inclean-Technologies-Company-Profile-1.pdf`,
};

export const products: Product[] = [
  {
    id: 1,
    name: "Air Handling Unit",
    slug: "air-handling-unit",
    summary:
      "Complete ventilation solutions for fresh, regulated airflow across commercial and industrial workspaces.",
    image: `${uploads}/2020/06/HAV.jpg`,
    intro: [
      "Inclean's air handling units provide a complete solution for ventilation needs in high-performing buildings. An AHU maintains, circulates, and regulates air throughout a space through a duct ventilation system.",
      "These units are ideal for rooftops, plant rooms, commercial buildings, industrial facilities, and custom HVAC applications where dependable indoor air quality matters.",
    ],
    sections: [
      {
        title: "Why Choose Inclean",
        body: "Inclean designs customized air handling units for project-specific airflow, filtration, and installation requirements.",
      },
      {
        title: "Applications",
        body: "Suitable for commercial buildings, industries, healthcare facilities, clean environments, and large workspaces that require controlled fresh air.",
      },
    ],
  },
  {
    id: 2,
    name: "Fan Coil Unit",
    slug: "fan-coil-unit",
    summary:
      "Compact heating and cooling units for localized comfort in residential and commercial spaces.",
    image: `${uploads}/2020/06/fcu.jpg`,
    intro: [
      "A fan coil unit is a compact assembly of a fan, coil, and supporting components used for cooling and heating air within a specific space.",
      "FCUs are widely used in commercial and residential areas where individual zones need efficient temperature control.",
    ],
    sections: [
      {
        title: "Types",
        body: "Two-pipe FCUs use one heat exchanger for heating or cooling at a time. Four-pipe FCUs allow heating and cooling circuits to operate with greater flexibility.",
      },
      {
        title: "Inclean Advantage",
        body: "Inclean offers FCUs in multiple sizes, thicknesses, and designs to suit project requirements.",
      },
    ],
  },
  {
    id: 3,
    name: "Air Washer Unit",
    slug: "air-washer-unit",
    summary:
      "Energy-saving air conditioning equipment that cools, humidifies, and improves indoor air quality.",
    image: `${uploads}/2020/06/air-washer-unit-500x500-1.webp`,
    intro: [
      "An air washer unit conditions air by reducing temperature and adding moisture. It can reduce temperatures up to 19 deg C on hot summer days.",
      "Air washers help remove air pollutants, dust, mold spores, and stale air while using much less power than conventional air conditioning.",
    ],
    sections: [
      {
        title: "Features",
        body: "Multiple fan speeds, filter change indication, adjustable humidistat, digital controls, fragrance container, and low-water indication.",
      },
      {
        title: "Best Use",
        body: "Ideal for industrial and commercial spaces that need large volumes of fresh, cooled air.",
      },
    ],
  },
  {
    id: 4,
    name: "Exhaust Unit",
    slug: "exhaust-unit",
    summary:
      "Ventilation units that remove smoke, moisture, odors, and contaminated air from enclosed spaces.",
    image: `${uploads}/2020/06/exhaust-unit.jpg`,
    intro: [
      "Exhaust units are effective solutions for ventilating an area and removing bad air. They can be installed in bathrooms, kitchens, industrial areas, and other spaces where fumes or moisture accumulate.",
      "Inclean provides exhaust units customized around the ventilation requirements of each site.",
    ],
    sections: [
      {
        title: "Benefits",
        body: "They remove odors, reduce humidity, clear vapors from surfaces, and remove airborne contaminants to support good-quality air.",
      },
      {
        title: "Customization",
        body: "Units can be designed for commercial, industrial, or residential ventilation needs.",
      },
    ],
  },
  {
    id: 5,
    name: "Wet Scrubber Unit",
    slug: "wet-scrubber-unit",
    summary:
      "Pollution-control equipment for removing particulates, mists, allergens, and soluble gases from air streams.",
    image: `${uploads}/2020/06/wet-scrubber-unit.webp`,
    intro: [
      "A wet scrubbing unit helps remove air pollutants, allergens, and dirt particles from HVAC and industrial exhaust systems.",
      "Wet scrubbers are useful for sticky, liquid-type, combustible, and soluble contaminants.",
    ],
    sections: [
      {
        title: "Advantages",
        body: "Wet scrubbers are compact, cost-effective, low-maintenance, and efficient at removing particulates and mists.",
      },
      {
        title: "Quality",
        body: "Inclean manufactures scrubber units with international quality standards and project-specific sizing.",
      },
    ],
  },
  {
    id: 6,
    name: "Dry Scrubber Unit",
    slug: "dry-scrubber-unit",
    summary:
      "Dry sorbent-based scrubbing systems for controlling acid gases and particulates without liquid processes.",
    image: `${uploads}/2020/06/dry-scrubber.jpg`,
    intro: [
      "Dry scrubbers inject a dry sorbent into the gas stream to remove acid gases and pollutants.",
      "They are efficient, compact, and useful where liquid scrubbing is not suitable.",
    ],
    sections: [
      {
        title: "Advantages",
        body: "Dry scrubbers are less expensive to operate, produce less waste, require less space, and can include filters for particulate control.",
      },
      {
        title: "Inclean Approach",
        body: "Inclean designs dry scrubbing units using reliable technology for efficient industrial pollution control.",
      },
    ],
  },
  {
    id: 7,
    name: "Industrial Cooler",
    slug: "industrial-cooler",
    summary:
      "Evaporative cooling systems for warehouses, factories, stockrooms, and large open work areas.",
    image: `${uploads}/2020/06/industrial-coolers.jpg`,
    intro: [
      "Industrial coolers, also known as industrial evaporative coolers, provide strong cooling for semi-open and large open spaces.",
      "They are used in industrial areas, stockrooms, religious places, warehouses, and other large facilities.",
    ],
    sections: [
      {
        title: "Types",
        body: "Portable industrial coolers support flexible cooling in warehouses, garages, and outdoor areas. Installed evaporative coolers are suited to large industrial and commercial spaces.",
      },
      {
        title: "Efficiency",
        body: "Evaporative cooling offers large-area comfort with lower power consumption than many conventional cooling systems.",
      },
    ],
  },
  {
    id: 8,
    name: "Axial Flow Fan",
    slug: "axial-flow-fan",
    summary:
      "High-volume, low-pressure fans for cooling equipment, ventilating workspaces, and moving air efficiently.",
    image: `${uploads}/2020/06/axial-air-fan.webp`,
    intro: [
      "Inclean manufactures axial flow fans for high-volume airflow in low-pressure areas.",
      "These fans are used for machine cooling, equipment cooling, ventilation systems, warehouses, and industrial applications.",
    ],
    sections: [
      {
        title: "Characteristics",
        body: "Axial fans offer large operating ranges, low noise, low energy consumption, and flexible mounting options.",
      },
      {
        title: "Applications",
        body: "Useful for transformers, generators, refrigeration systems, vending systems, and any space where cooling or air circulation is required.",
      },
    ],
  },
  {
    id: 9,
    name: "Centrifugal Blower",
    slug: "centrifugal-blower",
    summary:
      "High static pressure blowers that move air at a 90 degree angle for demanding industrial systems.",
    image: `${uploads}/2020/06/industrial-centrifugal-fan-500x500-1.jpg`,
    intro: [
      "A centrifugal blower uses centrifugal force to move air and discharge it at a 90 degree angle.",
      "These blowers are efficient, quiet, and useful across a wide range of airflow and static pressure conditions.",
    ],
    sections: [
      {
        title: "Build",
        body: "Centrifugal blowers include a motor and impeller and can be supplied in single-inlet or dual-inlet formats.",
      },
      {
        title: "Use Cases",
        body: "Suitable for HVAC, ventilation, industrial air movement, filtration, and process applications requiring dependable pressure.",
      },
    ],
  },
  {
    id: 10,
    name: "Exhaust Hood",
    slug: "exhaust-hood",
    summary:
      "Kitchen and industrial hoods that capture smoke, heat, grease, and airborne contaminants.",
    image: `${uploads}/2020/06/exhaust.jpg`,
    intro: [
      "An exhaust hood is essential for properly functioning kitchen and commercial cooking areas.",
      "It uses mechanical exhaust fans and filtration to remove smoke, dust, heat, and grease from the air supply.",
    ],
    sections: [
      {
        title: "Benefits",
        body: "Exhaust hoods support cleaner air, reduce heat and grease buildup, and help commercial kitchens maintain safer working conditions.",
      },
      {
        title: "Where It Fits",
        body: "Useful for restaurants, hotels, industrial kitchens, and other spaces where heat and fumes need source capture.",
      },
    ],
  },
  {
    id: 11,
    name: "Industrial Mancooler",
    slug: "industrial-mancooler",
    summary:
      "Durable air-moving systems designed to keep workers comfortable in high-heat industrial areas.",
    image: `${uploads}/2020/06/industria-fan.webp`,
    intro: [
      "Man coolers provide higher airflow over longer distances, which is essential in industrial spaces.",
      "They are built for durability and long service life in extreme operating conditions.",
    ],
    sections: [
      {
        title: "Applications",
        body: "Commonly used on shop floors, furnace areas, heat-producing work zones, and large rooms with many workers and machines.",
      },
      {
        title: "Worker Comfort",
        body: "Industrial mancoolers help maintain safer, more comfortable working conditions by improving airflow.",
      },
    ],
  },
  {
    id: 12,
    name: "HVLS Fans",
    slug: "hvls-fans",
    summary:
      "High-volume, low-speed ceiling fans for large industrial areas that need balanced air circulation.",
    image: `${uploads}/2020/06/centrifugal-fan.jpg`,
    intro: [
      "HVLS fans generate large amounts of air while moving at low speed.",
      "They help reduce hot spots, stagnant air, condensation, and cooling costs across wide industrial spaces.",
    ],
    sections: [
      {
        title: "Performance",
        body: "A single large-diameter HVLS fan can move air across a broad area and improve worker comfort.",
      },
      {
        title: "Industrial Fit",
        body: "Useful for warehouses, manufacturing units, commercial spaces, and facilities that need consistent air movement.",
      },
    ],
  },
  {
    id: 13,
    name: "Green House Fans",
    slug: "green-house-fans",
    summary:
      "Ventilation fans that support plant health by improving airflow, temperature, moisture, and air exchange.",
    image: `${uploads}/2020/06/greenhouse-ventilation-fan-1000x1000-1.webp`,
    intro: [
      "Greenhouse fans break up air stratification and improve air circulation for plants.",
      "Fresh circulating air brings carbon dioxide to plants and helps support healthier growth conditions.",
    ],
    sections: [
      {
        title: "Benefits",
        body: "They influence air temperature, moisture, condensation, dust, pests, pathogen levels, and carbon dioxide availability.",
      },
      {
        title: "Options",
        body: "Inclean produces multiple types of greenhouse fans, including floor-mounted and vertical configurations.",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Ventilation System",
    href: "/Project/Project1",
    summary:
      "Industrial ventilation systems that control airborne dust, fumes, humidity, and heat while improving working conditions.",
    image: `${uploads}/2020/06/industry-970151_1920.jpg`,
  },
  {
    id: 2,
    title: "Kitchen Exhaust Ventilation",
    href: "/Project/Project2",
    summary:
      "Commercial kitchen exhaust systems for removing smoke, grease, heat, and odors from cooking areas.",
    image: `${uploads}/2020/04/BCRUSH-Smoke-Exhaust-1.jpg`,
  },
  {
    id: 3,
    title: "Centralized Air Conditioning",
    href: "/Project/Project3",
    summary:
      "Efficient central HVAC systems designed to serve multiple spaces with optimized energy use.",
    image: `${uploads}/2020/04/WhatsApp-Image-2023-03-24-at-1.30.53-PM.jpeg`,
  },
  {
    id: 4,
    title: "Aircraft Hanger Ventilation",
    href: "/Project/Project4",
    summary:
      "High-volume hangar ventilation solutions that support aircraft protection, maintenance, and comfort.",
    image: `${uploads}/2020/04/WhatsApp-Image-2023-03-24-at-1.30.40-PM.jpeg`,
  },
  {
    id: 5,
    title: "Parking Ventilation System",
    href: "/Project/Project5",
    summary:
      "Ventilation systems for enclosed car parks that remove CO and support smoke extraction in emergencies.",
    image: `${uploads}/2020/06/atc-otopark-havalandirma-2.jpg`,
  },
  {
    id: 6,
    title: "Lift-well Pressurization",
    href: "/Project/Project6",
    summary:
      "Smoke-control pressurization systems that protect lift areas during fire events.",
    image: `${uploads}/2020/06/lift.jpg`,
  },
  {
    id: 7,
    title: "Fume Extraction System",
    href: "/Project/Project7",
    summary:
      "Customized source-capture systems for welding fumes, pollutants, and industrial airborne contaminants.",
    image: `${uploads}/2020/06/Welding_NEX_HD-2.jpg`,
  },
];
