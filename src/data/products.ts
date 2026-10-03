export interface Product {
  slug: string;
  label: string;
  title: string;
  intro: string;
  description: string;
  details: { title: string; text: string }[];
  comingSoon: boolean;
  image?: { src: string; alt: string; width: number; height: number; caption: string };
}

export function productHref(product: Pick<Product, "slug">): string {
  return `/produkter/${product.slug}/`;
}

export const products: Product[] = [
  {
    slug: "temperatur-luftfuktighet",
    label: "Temp/luftfuktighet",
    title: "Temperatur og luftfuktighet",
    intro: "Følg inneklimaet på byggeplassen i SitePulse Cloud.",
    description:
      "Samle temperatur og luftfuktighet i samme oversikt. Målingene gjør det enklere å følge forholdene gjennom prosjektet, fra byggvarme til uttørking.",
    details: [
      {
        title: "Oversikt",
        text: "Se målingene i SitePulse Cloud sammen med resten av prosjektet.",
      },
      {
        title: "Historikk",
        text: "Følg utviklingen over tid og bruk målingene i oppfølgingen av byggeplassen.",
      },
      { title: "Varsling", text: "Sett grenser for når forholdene trenger oppmerksomhet." },
    ],
    comingSoon: false,
  },
  {
    slug: "stromstopsel",
    label: "Strømstøpsel",
    title: "Strømstøpsel",
    intro: "Enkel strømstyring som en del av SitePulse.",
    description:
      "Koble til utstyr og la strømstyring inngå i oppfølgingen av byggeplassen. Sammen med målinger og regler i SitePulse kan dere styre etter behov.",
    details: [
      { title: "Styring", text: "Samle oppfølgingen av tilkoblet utstyr i SitePulse Cloud." },
      {
        title: "Automasjon",
        text: "Bruk regler for å knytte styring til målt temperatur på byggeplassen.",
      },
      {
        title: "Tilpasset utstyret",
        text: "Ta kontakt for å avklare hvilken løsning som passer utstyret dere ønsker å styre.",
      },
    ],
    comingSoon: false,
  },
  {
    slug: "gateway",
    image: {
      src: "/images/sitepulse-gateway-render-v2.png",
      alt: "SitePulse Gateway i svart kapsling med gul pakning og ZiMO-etikett",
      width: 1536,
      height: 1024,
      caption: "Produktillustrasjon · SitePulse Gateway",
    },
    label: "Gateway",
    title: "SitePulse Gateway",
    intro: "Fra byggeplassen til SitePulse Cloud, via LTE.",
    description:
      "Gatewayen kobler sensorer og utstyr til SitePulse Cloud. Prosjektteamet får målinger, status og historikk tilgjengelig i nettleseren, på kontoret eller i felt.",
    details: [
      { title: "LTE", text: "Gatewayen bruker mobilnettet for å holde SitePulse Cloud oppdatert." },
      {
        title: "Samlet oversikt",
        text: "Følg tilkoblede enheter og målinger fra samme prosjekt i Cloud.",
      },
      {
        title: "Fra 399 kr/mnd",
        text: "Et abonnement for tilkoblingen på byggeplassen. Ta kontakt for et oppsett tilpasset prosjektet.",
      },
    ],
    comingSoon: false,
  },
  {
    slug: "fuktighetsmaler-betong",
    label: "Fuktighetsmåler i betong",
    title: "Fuktighetsmåler i betong",
    intro: "Fuktmåling i betong. Kommer snart til SitePulse.",
    description:
      "Vi utvikler en sensor for måling av relativ fuktighet i betong i henhold til NS 3511. Sensoren skal gi måledata til oppfølging av uttørking og fuktdokumentasjon i SitePulse.",
    details: [
      {
        title: "NS 3511",
        text: "Planlagt målemetode: relativ fuktighet (RF) i borehull i betong, i henhold til NS 3511.",
      },
      {
        title: "Fuktdokumentasjon",
        text: "Målet er å gi måledata som kan inngå i prosjektets dokumentasjon av fuktnivå før overflatebelegg legges.",
      },
      {
        title: "Kommer snart",
        text: "Sensoren er under utvikling. Mer informasjon om utførelse og tilgjengelighet kommer før lansering.",
      },
    ],
    comingSoon: true,
  },
  {
    slug: "fuktighetsmaler-tre",
    label: "Fuktighetsmåler i tre",
    title: "Fuktighetsmåler i tre",
    intro: "Fuktmåling i tre. Kommer snart til SitePulse.",
    description:
      "Vi utvikler en sensor for måling av fukt i trekonstruksjoner i henhold til NS 3512. Sensoren skal gi måledata til oppfølging av materialfukt og fuktdokumentasjon i SitePulse.",
    details: [
      {
        title: "NS 3512",
        text: "Planlagt målemetode: måling av fukt i trekonstruksjoner i byggefasen, i henhold til NS 3512.",
      },
      {
        title: "Fuktdokumentasjon",
        text: "Målet er å gi måledata som kan inngå i prosjektets kontroll av materialfukt før innbygging.",
      },
      {
        title: "Kommer snart",
        text: "Sensoren er under utvikling. Mer informasjon om utførelse og tilgjengelighet kommer før lansering.",
      },
    ],
    comingSoon: true,
  },
];
