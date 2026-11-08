export type ProjectSlug =
  | "twinecapital"
  | "repair-desk"
  | "minerallink"
  | "ember-gas"
  | "tone4dmedia"
  | "on-eaglewings-group";

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  portfolioType: string;
  status: string;
  description: string;
  purpose: string;
  focus: string[];
  relatedHref?: string;
  relatedLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "repair-desk",
    name: "Repair Desk",
    category: "Service Enquiry Platform",
    portfolioType: "TwineEngine product initiative",
    status: "Pilot workspace preview",
    description:
      "A TwineEngine product initiative exploring a digital workspace for collecting repair and service enquiries and helping teams review requests and follow up.",
    purpose:
      "Make it clearer for people to describe a repair or service need and provide a structured starting point for the team to review the enquiry.",
    focus: [
      "Repair and service enquiry capture",
      "Structured request details",
      "Team review and follow-up workflow",
      "Pilot workspace direction",
    ],
    relatedHref: "/businesses/twineengine",
    relatedLabel: "About TwineEngine",
  },
  {
    slug: "twinecapital",
    name: "TwineCapital",
    category: "Financial Technology / SaaS",
    portfolioType: "Group business initiative",
    status: "Under development",
    description:
      "An accounting and financial technology initiative focused on financial management, reporting and intelligent financial workflows for small businesses and multi-entity groups.",
    purpose:
      "Explore a more connected way for businesses to work with financial information, management and reporting.",
    focus: [
      "Accounting and financial management",
      "Financial intelligence and reporting",
      "Business financial workflows",
      "Small-business and multi-entity needs",
    ],
    relatedHref: "/businesses/twinecapital",
    relatedLabel: "About TwineCapital",
  },
  {
    slug: "minerallink",
    name: "MineralLink",
    category: "Mining Technology / B2B Platform",
    portfolioType: "Digital platform initiative",
    status: "Under development",
    description:
      "A digital platform initiative designed to simplify mineral supplier and buyer matching and support mineral sourcing and trading workflows.",
    purpose:
      "Make it easier to navigate supplier and buyer discovery and the workflows involved in mineral sourcing and trade.",
    focus: [
      "Mineral supplier and buyer matching",
      "Sourcing workflow support",
      "Trading workflow support",
      "B2B platform experience",
    ],
  },
  {
    slug: "ember-gas",
    name: "Ember Gas",
    category: "Commerce / E-commerce",
    portfolioType: "Commerce project",
    status: "Project development",
    description:
      "A gas commerce platform project involving digital product presentation and online commerce functionality.",
    purpose:
      "Develop a digital commerce experience for presenting gas products and supporting online commerce workflows.",
    focus: [
      "Digital product presentation",
      "Online commerce functionality",
      "Customer-facing digital experience",
    ],
  },
  {
    slug: "tone4dmedia",
    name: "Tone4DMedia",
    category: "Business Website / Digital Presence",
    portfolioType: "Selected website project",
    status: "Website project",
    description:
      "A corporate website and digital presence project for a design, print and branding business.",
    purpose:
      "Create a considered online presence that introduces the business and its design, print and branding focus.",
    focus: [
      "Corporate website",
      "Business information architecture",
      "Digital presence for design, print and branding",
    ],
  },
  {
    slug: "on-eaglewings-group",
    name: "On-Eaglewings Group",
    category: "Corporate Technology Platform",
    portfolioType: "Parent group platform",
    status: "Active development",
    description:
      "The parent group's own digital corporate platform, bringing together its business initiatives, technology capabilities and vision.",
    purpose:
      "Present the group clearly and provide a digital home for its initiatives, capabilities and direction.",
    focus: [
      "Parent brand and group information",
      "Business initiative portfolio",
      "Technology capabilities and vision",
    ],
    relatedHref: "/",
    relatedLabel: "Visit the group homepage",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
