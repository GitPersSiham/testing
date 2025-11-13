export interface Station {
  id: string;
  name: string;
  subtitle?: string;
  lignes: string[];
}

export interface Ligne {
  id: string;
  number: string;
  name: string;
  color: string;
  textColor?: string;
  stations: Station[];
}

export interface Correspondance {
  type: 'metro' | 'rer' | 'tramway';
  number: string;
  color: string;
}
