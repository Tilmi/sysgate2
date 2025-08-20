import { DashboardData, GateStatus } from "@/types/dashboard";

// Fungsi untuk mengecek apakah gate online berdasarkan jam kerja (7:00 - 17:00)
export const getGateStatus = (): GateStatus => {
  const now = new Date();
  const hour = now.getHours();
  const isOnline = hour >= 7 && hour < 17;

  return {
    isOnline,
    lastUpdate: now.toLocaleTimeString("id-ID"),
  };
};

// Simulasi data real-time
export const getDashboardData = (): DashboardData => {
  // Simulasi perubahan data setiap detik
  const baseData = {
    totalInside: 482,
    karyawanPKC: 45,
    phlKontraktor: 302,
    praktikan: 8,
    visitor: 135,
    orangMasuk: 156,
    orangKeluar: 89,
  };

  // Tambahkan variasi kecil untuk simulasi update
  const variation = Math.floor(Math.random() * 10) - 5; // -5 to +5

  const karyawan = Math.max(
    0,
    baseData.karyawanPKC + Math.floor(variation * 0.1)
  );
  const phl = Math.max(0, baseData.phlKontraktor + Math.floor(variation * 0.6));
  const praktikan = Math.max(
    0,
    baseData.praktikan + Math.floor(Math.random() * 5) - 2
  ); // -2 to +2
  const visitor = Math.max(0, baseData.visitor + Math.floor(variation * 0.3));

  // Simulasi data orang masuk dan keluar yang berubah setiap detik
  const masukVariation = Math.floor(Math.random() * 6) - 3; // -3 to +3
  const keluarVariation = Math.floor(Math.random() * 4) - 2; // -2 to +2

  const orangMasuk = Math.max(0, baseData.orangMasuk + masukVariation);
  const orangKeluar = Math.max(0, baseData.orangKeluar + keluarVariation);

  return {
    totalInside: Math.max(0, karyawan + phl + praktikan + visitor),
    karyawanPKC: karyawan,
    phlKontraktor: phl,
    praktikan: praktikan,
    visitor: visitor,
    orangMasuk: orangMasuk,
    orangKeluar: orangKeluar,
    lastUpdated: new Date().toLocaleTimeString("id-ID"),
  };
};

// Data untuk mapping cards
export const getCardMappings = (data: DashboardData) => [
  {
    id: "total",
    title: "Total Inside S04",
    value: data.totalInside,
    color: "green" as const,
    icon: "UsersIcon",
  },
  {
    id: "karyawan",
    title: "Karyawan PKC",
    value: data.karyawanPKC,
    color: "blue" as const,
    icon: "UserIcon",
  },
  {
    id: "phl",
    title: "PHL & Kontraktor",
    value: data.phlKontraktor,
    color: "cyan" as const,
    icon: "WrenchScrewdriverIcon",
  },
  {
    id: "praktikan",
    title: "Praktikan",
    value: data.praktikan,
    color: "orange" as const,
    icon: "AcademicCapIcon",
  },
  {
    id: "visitor",
    title: "Visitor",
    value: data.visitor,
    color: "red" as const,
    icon: "UserGroupIcon",
  },
  {
    id: "masuk",
    title: "Orang Masuk Hari Ini",
    value: data.orangMasuk,
    color: "purple" as const,
    icon: "ArrowRightCircleIcon",
  },
  {
    id: "keluar",
    title: "Orang Keluar Hari Ini",
    value: data.orangKeluar,
    color: "indigo" as const,
    icon: "ArrowLeftCircleIcon",
  },
];
