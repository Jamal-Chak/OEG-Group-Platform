export type Business = {
  name: string;
  category: string;
  route: string;
  theme: "engine" | "capital";
  summary: string;
  description: string;
  focus: string[];
  purpose: string;
};

export const businesses: Business[] = [
  {
    name: "TwineEngine",
    category: "Software engineering & digital solutions",
    route: "/businesses/twineengine",
    theme: "engine",
    summary:
      "Software engineering, IT consulting and digital solutions for organizations ready to move forward.",
    description:
      "TwineEngine is the group's software engineering and digital solutions brand, focused on helping businesses build useful technology and improve the way work gets done.",
    focus: [
      "Custom software development",
      "Website development",
      "Web applications",
      "Mobile applications",
      "Business process automation",
      "IT consulting",
      "Digital transformation",
      "Technology solutions for businesses",
    ],
    purpose:
      "Bring practical engineering and digital thinking to business challenges, from improving operations to creating new digital products.",
  },
  {
    name: "TwineCapital",
    category: "Financial technology",
    route: "/businesses/twinecapital",
    theme: "capital",
    summary:
      "Fintech, accounting software and financial intelligence designed to bring greater clarity to business.",
    description:
      "TwineCapital is the group's financial technology and accounting software initiative, exploring more connected and intelligent ways to manage business finances.",
    focus: [
      "Accounting and financial management",
      "Financial intelligence",
      "Financial reporting",
      "Business financial workflows",
      "Small-business financial operations",
      "Multi-entity financial management",
    ],
    purpose:
      "Explore a more intelligent financial operating system that brings useful financial tools and insight closer together.",
  },
];
