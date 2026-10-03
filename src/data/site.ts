export const site = {
  url: "https://zimo.no",
  home: "/sitepulse/",
  contact: "/kontakt/",
  breeam: "/breeam-nor/",
  becomeCustomer: "/kontakt/#bli-kunde",
  cloud: "https://sitepulse.zimo.no",
  contactName: "Mads Falk",
  email: "mads.falk@zimo.no",
  organizationNumber: "933 857 379",
} as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/zimooas/" },
  { label: "Instagram", href: "https://www.instagram.com/zimoas/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/94825200/" },
] as const;

export function contactHref(subject?: string): string {
  return `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
