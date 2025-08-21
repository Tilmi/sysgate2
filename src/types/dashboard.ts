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

export interface GridRowConfig {
  cols: string;
  cards: number;
}

export interface LayoutConfig {
  id: string;
  name: string;
  description: string;
  cardSizes: ("normal" | "large")[];
  gridConfig: GridRowConfig[];
}

export type CardSize = "normal" | "large";
