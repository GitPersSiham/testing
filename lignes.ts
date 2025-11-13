import { Ligne, Station } from '@/types';

export const stations: Station[] = [
  {
    id: 'saint-denis-pleyel',
    name: 'Saint-Denis – Pleyel',
    lignes: ['14', '15', '16', '17', 'D']
  },
  {
    id: 'mairie-saint-ouen',
    name: 'Mairie de Saint-Ouen',
    lignes: ['14']
  },
  {
    id: 'saint-ouen',
    name: 'Saint-Ouen',
    lignes: ['14']
  },
  {
    id: 'porte-clichy',
    name: 'Porte de Clichy',
    subtitle: 'Tribunal de Paris',
    lignes: ['14']
  },
  {
    id: 'pont-cardinet',
    name: 'Pont Cardinet',
    lignes: ['14']
  },
  {
    id: 'maison-blanche',
    name: 'Maison Blanche',
    lignes: ['14']
  },
  {
    id: 'hopital-bicetre',
    name: 'Hôpital Bicêtre',
    lignes: ['14']
  },
  {
    id: 'villejuif-gustave-roussy',
    name: 'Villejuif – Gustave Roussy',
    lignes: ['14']
  },
  {
    id: 'lhay-les-roses',
    name: "L'Haÿ-les-Roses",
    lignes: ['14']
  },
  {
    id: 'chevilly-larue',
    name: 'Chevilly-Larue',
    subtitle: 'Marché International',
    lignes: ['14']
  },
  {
    id: 'thiais-orly',
    name: 'Thiais – Orly',
    subtitle: 'Pont de Rungis',
    lignes: ['14']
  },
  {
    id: 'aeroport-orly',
    name: "Aéroport d'Orly",
    subtitle: 'Paray-Vieille-Poste',
    lignes: ['14']
  }
];

export const lignes: Ligne[] = [
  {
    id: '14',
    number: '14',
    name: 'Ligne 14',
    color: '#62259D',
    textColor: '#FFFFFF',
    stations: stations.filter(s => s.lignes.includes('14'))
  },
  {
    id: '15-est',
    number: '15',
    name: 'Ligne 15 Est',
    color: '#C04191',
    textColor: '#FFFFFF',
    stations: []
  },
  {
    id: '15-ouest',
    number: '15',
    name: 'Ligne 15 Ouest',
    color: '#C04191',
    textColor: '#FFFFFF',
    stations: []
  },
  {
    id: '15-sud',
    number: '15',
    name: 'Ligne 15 Sud',
    color: '#C04191',
    textColor: '#FFFFFF',
    stations: []
  },
  {
    id: '16',
    number: '16',
    name: 'Ligne 16',
    color: '#FF7E2E',
    textColor: '#FFFFFF',
    stations: []
  },
  {
    id: '17',
    number: '17',
    name: 'Ligne 17',
    color: '#FFD400',
    textColor: '#000000',
    stations: []
  },
  {
    id: '18',
    number: '18',
    name: 'Ligne 18',
    color: '#00A88F',
    textColor: '#FFFFFF',
    stations: []
  }
];

export const getLigneById = (id: string): Ligne | undefined => {
  return lignes.find(ligne => ligne.id === id);
};

export const getStationById = (id: string): Station | undefined => {
  return stations.find(station => station.id === id);
};
