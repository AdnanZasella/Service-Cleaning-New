// Single source of truth for NAP and services. Must match Google Business Profile character for character.
export const site = {
  name: 'E&I Bygg Service Fastighet Städning AB',
  shortName: 'E&I',
  // [TODO: domän] Byt till riktig domän när den finns. Påverkar canonical, sitemap och schema.
  url: 'https://todo-doman.se',
  locale: 'sv-SE',
  phones: [
    { display: '070-013 21 39', tel: '+46700132139' },
    { display: '070-446 67 54', tel: '+46704466754' },
  ],
  email: 'emsabiscevic@gmail.com', // [TODO: domänmail]
  mainOrt: 'Trollhättan',
  // Serviceföretag utan publik adress: bara ort och land i schema.
  schemaAddress: { '@type': 'PostalAddress', addressLocality: 'Trollhättan', addressRegion: 'Västra Götalands län', addressCountry: 'SE' },
  areas: ['Trollhättan', 'Grästorp', 'Lysekil', 'Smögen'],
  // [TODO: Google Business Profile-länk] sameAs läggs till i schema när den finns
  reviewUrl: '/recension',
  hoursText: 'Måndag–fredag 07–16. Akuta uppdrag även helger.',
  responseTime: 'inom 48 timmar',
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '16:00' },
} as const;

export interface Service {
  slug: string;
  name: string;
  forWho: string;
  rut: boolean;
  summary: string;
  hidden?: boolean; // utan bekräftad omfattning: finns som sida men listas inte
}

const allServices: Service[] = [
  { slug: 'flyttstad-trollhattan', name: 'Flyttstäd', forWho: 'Privatpersoner, hyresvärdar, mäklare', rut: true, summary: 'Slutstäd inför överlämning och besiktning.' },
  { slug: 'hemstad-trollhattan', name: 'Hemstäd', forWho: 'Privatpersoner', rut: true, summary: 'Regelbunden eller enstaka städning hemma.' },
  { slug: 'storstad-trollhattan', name: 'Storstäd', forWho: 'Privatpersoner', rut: true, summary: 'Grundlig städning rum för rum.' },
  { slug: 'fonsterputsning-trollhattan', name: 'Fönsterputsning', forWho: 'Privatpersoner, fritidshus', rut: true, summary: 'Fönster in- och utvändigt.' },
  { slug: 'kontorsstadning-trollhattan', name: 'Kontorsstäd', forWho: 'Företag och BRF', rut: false, summary: 'Återkommande städning av kontor och lokaler.' },
  { slug: 'fastighetsservice-trollhattan', name: 'Fastighetsservice', forWho: 'Fastighetsägare och BRF', rut: false, summary: '[TODO: omfattning fastighetsservice]', hidden: true },
];

export const services: Service[] = allServices.filter((s) => !s.hidden);
