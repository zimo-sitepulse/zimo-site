export const buildPlans = [
  { name: "SitePulse Build 10", price: "1 490", units: 10 },
  { name: "SitePulse Build 25", price: "2 990", units: 25 },
  { name: "SitePulse Build 50", price: "4 990", units: 50 },
] as const;

export const buildIncludes = ["SitePulse Cloud", "Nødvendig gateway"] as const;

export const buildTerms = {
  minimumPeriod: "3 måneder",
  startupCost: "990 kr",
} as const;
