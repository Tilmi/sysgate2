// import { DashboardData, GateStatus } from "@/types/dashboard";

// // Fungsi untuk mengecek apakah gate online berdasarkan jam kerja (7:00 - 17:00)
// export const getGateStatus = (): GateStatus => {
//   const now = new Date();
//   const hour = now.getHours();
//   const isOnline = hour >= 7 && hour < 17;

//   return {
//     isOnline,
//     lastUpdate: now.toLocaleTimeString("id-ID"),
//   };
// };

// // Simulasi data real-time
// export const getDashboardData = (): DashboardData => {
//   // Simulasi perubahan data setiap detik
//   const baseData = {
//     totalInside: 482,
//     karyawanPKC: 45,
//     phlKontraktor: 302,
//     praktikan: 8,
//     visitor: 135,
//     orangMasuk: 156,
//     orangKeluar: 89,
//   };

//   // Tambahkan variasi kecil untuk simulasi update
//   const variation = Math.floor(Math.random() * 10) - 5; // -5 to +5

//   const karyawan = Math.max(
//     0,
//     baseData.karyawanPKC + Math.floor(variation * 0.1)
//   );
//   const phl = Math.max(0, baseData.phlKontraktor + Math.floor(variation * 0.6));
//   const praktikan = Math.max(
//     0,
//     baseData.praktikan + Math.floor(Math.random() * 5) - 2
//   ); // -2 to +2
//   const visitor = Math.max(0, baseData.visitor + Math.floor(variation * 0.3));

//   // Simulasi data orang masuk dan keluar yang berubah setiap detik
//   const masukVariation = Math.floor(Math.random() * 6) - 3; // -3 to +3
//   const keluarVariation = Math.floor(Math.random() * 4) - 2; // -2 to +2

//   const orangMasuk = Math.max(0, baseData.orangMasuk + masukVariation);
//   const orangKeluar = Math.max(0, baseData.orangKeluar + keluarVariation);

//   return {
//     totalInside: Math.max(0, karyawan + phl + praktikan + visitor),
//     karyawanPKC: karyawan,
//     phlKontraktor: phl,
//     praktikan: praktikan,
//     visitor: visitor,
//     orangMasuk: orangMasuk,
//     orangKeluar: orangKeluar,
//     lastUpdated: new Date().toLocaleTimeString("id-ID"),
//   };
// };

// // Data untuk mapping cards
// export const getCardMappings = (data: DashboardData) => [
//   {
//     id: "total",
//     title: "Total Inside S04",
//     value: data.totalInside,
//     color: "green" as const,
//     icon: "UsersIcon",
//   },
//   {
//     id: "karyawan",
//     title: "Karyawan PKC",
//     value: data.karyawanPKC,
//     color: "blue" as const,
//     icon: "UserIcon",
//   },
//   {
//     id: "phl",
//     title: "PHL & Kontraktor",
//     value: data.phlKontraktor,
//     color: "cyan" as const,
//     icon: "WrenchScrewdriverIcon",
//   },
//   {
//     id: "praktikan",
//     title: "Praktikan",
//     value: data.praktikan,
//     color: "orange" as const,
//     icon: "AcademicCapIcon",
//   },
//   {
//     id: "visitor",
//     title: "Visitor",
//     value: data.visitor,
//     color: "red" as const,
//     icon: "UserGroupIcon",
//   },
//   {
//     id: "masuk",
//     title: "Orang Masuk Hari Ini",
//     value: data.orangMasuk,
//     color: "purple" as const,
//     icon: "ArrowRightCircleIcon",
//   },
//   {
//     id: "keluar",
//     title: "Orang Keluar Hari Ini",
//     value: data.orangKeluar,
//     color: "indigo" as const,
//     icon: "ArrowLeftCircleIcon",
//   },
// ];
import {
  DashboardData,
  GateStatus,
  CardData,
  LayoutConfig,
} from "@/types/dashboard";

// Function to check if it's dark mode time (17:00 - 7:00)
export const checkDarkMode = (): boolean => {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 17 || hour < 7;
};

// Function to get daily color theme based on day of week
export const getDailyColorTheme = (): CardData["color"][] => {
  const dayOfWeek = new Date().getDay();
  const colorThemes: CardData["color"][][] = [
    ["green", "blue", "cyan", "orange", "red", "purple", "indigo"], // Minggu
    ["blue", "cyan", "teal", "green", "purple", "pink", "indigo"], // Senin
    ["orange", "amber", "red", "pink", "purple", "blue", "cyan"], // Selasa
    ["purple", "indigo", "blue", "cyan", "green", "teal", "orange"], // Rabu
    ["red", "pink", "purple", "indigo", "blue", "green", "amber"], // Kamis
    ["cyan", "teal", "green", "blue", "purple", "orange", "red"], // Jumat
    ["amber", "orange", "red", "purple", "pink", "cyan", "blue"], // Sabtu
  ];
  return colorThemes[dayOfWeek];
};

// Dynamic Layout System - Changes every minute for demo
export const getCurrentLayout = (): LayoutConfig => {
  const now = new Date();
  const minute = now.getMinutes();

  // Define 7 different layouts (cycling every minute for demo)
  const layouts: LayoutConfig[] = [
    {
      id: "classic",
      name: "Classic Grid",
      description: "Traditional 3-2-2 layout",
      cardSizes: [
        "large",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "lg:grid-cols-3", cards: 3 }, // First row: 3 cards
        { cols: "md:grid-cols-2", cards: 2 }, // Second row: 2 cards
        { cols: "md:grid-cols-2", cards: 2 }, // Third row: 2 cards
      ],
    },
    {
      id: "centered",
      name: "Center Focus",
      description: "Large card in center",
      cardSizes: [
        "normal",
        "large",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "lg:grid-cols-3", cards: 3 }, // First row: 3 cards (middle is large)
        { cols: "md:grid-cols-2", cards: 2 },
        { cols: "md:grid-cols-2", cards: 2 },
      ],
    },
    {
      id: "tower",
      name: "Tower Layout",
      description: "Single large card on top",
      cardSizes: [
        "large",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "grid-cols-1", cards: 1 }, // One large card on top
        { cols: "lg:grid-cols-3", cards: 3 }, // Three cards in second row
        { cols: "lg:grid-cols-3", cards: 3 }, // Three cards in third row
      ],
    },
    {
      id: "symmetric",
      name: "Symmetric Grid",
      description: "Balanced 2x2 then 3 layout",
      cardSizes: [
        "normal",
        "normal",
        "normal",
        "normal",
        "large",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "md:grid-cols-2", cards: 2 }, // Two cards first
        { cols: "md:grid-cols-2", cards: 2 }, // Two cards second
        { cols: "lg:grid-cols-3", cards: 3 }, // Three cards last
      ],
    },
    {
      id: "spotlight",
      name: "Spotlight Layout",
      description: "Two large cards featured",
      cardSizes: [
        "large",
        "normal",
        "large",
        "normal",
        "normal",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "lg:grid-cols-3", cards: 3 }, // Mixed sizes first row
        { cols: "md:grid-cols-2", cards: 2 },
        { cols: "md:grid-cols-2", cards: 2 },
      ],
    },
    {
      id: "cascade",
      name: "Cascade Layout",
      description: "Descending card importance",
      cardSizes: [
        "large",
        "large",
        "normal",
        "normal",
        "normal",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "md:grid-cols-2", cards: 2 }, // Two large cards
        { cols: "lg:grid-cols-3", cards: 3 }, // Three normal cards
        { cols: "md:grid-cols-2", cards: 2 }, // Two normal cards
      ],
    },
    {
      id: "minimal",
      name: "Minimal Grid",
      description: "Clean 2-column layout",
      cardSizes: [
        "normal",
        "normal",
        "normal",
        "normal",
        "large",
        "normal",
        "normal",
      ],
      gridConfig: [
        { cols: "md:grid-cols-2", cards: 2 },
        { cols: "md:grid-cols-2", cards: 2 },
        { cols: "lg:grid-cols-3", cards: 3 },
      ],
    },
  ];

  // Cycle through layouts every minute
  const layoutIndex = minute % layouts.length;
  return layouts[layoutIndex];
};

// Function to check if gate is online based on working hours (7:00 - 17:00)
export const getGateStatus = (): GateStatus => {
  const now = new Date();
  const hour = now.getHours();
  const isOnline = hour >= 7 && hour < 17;

  return {
    isOnline,
    lastUpdate: now.toLocaleTimeString("id-ID"),
  };
};

// Real-time data simulation
export const getDashboardData = (): DashboardData => {
  // Base data for simulation
  const baseData = {
    totalInside: 482,
    karyawanPKC: 45,
    phlKontraktor: 302,
    praktikan: 8,
    visitor: 135,
    orangMasuk: 156,
    orangKeluar: 89,
  };

  // Add small variation for real-time simulation
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

  // Simulate people entering and leaving with different variations
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

// Data mapping for cards with daily color themes
export const getCardMappings = (data: DashboardData): CardData[] => {
  const dailyColors = getDailyColorTheme();

  return [
    {
      id: "total",
      title: "Total Inside S04",
      value: data.totalInside,
      color: dailyColors[0],
      icon: "UsersIcon",
    },
    {
      id: "karyawan",
      title: "Karyawan PKC",
      value: data.karyawanPKC,
      color: dailyColors[1],
      icon: "UserIcon",
    },
    {
      id: "phl",
      title: "PHL & Kontraktor",
      value: data.phlKontraktor,
      color: dailyColors[2],
      icon: "WrenchScrewdriverIcon",
    },
    {
      id: "praktikan",
      title: "Praktikan",
      value: data.praktikan,
      color: dailyColors[3],
      icon: "AcademicCapIcon",
    },
    {
      id: "visitor",
      title: "Visitor",
      value: data.visitor,
      color: dailyColors[4],
      icon: "UserGroupIcon",
    },
    {
      id: "masuk",
      title: "Orang Masuk Hari Ini",
      value: data.orangMasuk,
      color: dailyColors[5],
      icon: "ArrowRightCircleIcon",
    },
    {
      id: "keluar",
      title: "Orang Keluar Hari Ini",
      value: data.orangKeluar,
      color: dailyColors[6],
      icon: "ArrowLeftCircleIcon",
    },
  ];
};
