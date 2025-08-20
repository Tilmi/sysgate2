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
  color: "green" | "blue" | "cyan" | "orange" | "red" | "purple" | "indigo";
  icon: string;
}

export interface GateStatus {
  isOnline: boolean;
  lastUpdate: string;
}
