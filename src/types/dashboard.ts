// export interface DashboardData {
//   totalInside: number;
//   karyawanPKC: number;
//   phlKontraktor: number;
//   praktikan: number;
//   visitor: number;
//   orangMasuk: number;
//   orangKeluar: number;
//   lastUpdated: string;
// }

// export interface CardData {
//   id: string;
//   title: string;
//   value: number;
//   color: "green" | "blue" | "cyan" | "orange" | "red" | "purple" | "indigo";
//   icon: string;
// }

// export interface GateStatus {
//   isOnline: boolean;
//   lastUpdate: string;
// }
export interface DashboardData {
  totalInside: number;
  karyawanPKC: number;
  phlKontraktor: number;
  praktikan: number;
  visitor: number;
  orangMasuk: number;
  orangKeluar: number;
  lastUpdated: string;
}

export interface CardData {
  id: string;
  title: string;
  value: number;
  color:
    | "green"
    | "blue"
    | "cyan"
    | "orange"
    | "red"
    | "purple"
    | "indigo"
    | "pink"
    | "teal"
    | "amber";
  icon: string;
}

export interface GateStatus {
  isOnline: boolean;
  lastUpdate: string;
}

export interface ColorTheme {
  bg: string;
  icon: string;
  text: string;
  value: string;
  border: string;
  shadow: string;
}

// New interfaces for dynamic layout system
export interface GridRowConfig {
  cols: string; // Tailwind grid class like 'lg:grid-cols-3'
  cards: number; // Number of cards in this row
}

export interface LayoutConfig {
  id: string;
  name: string;
  description: string;
  cardSizes: ("normal" | "large")[];
  gridConfig: GridRowConfig[];
}

// Card size type for better type safety
export type CardSize = "normal" | "large";
