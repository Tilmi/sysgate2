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

// Function to get daily color theme based on day of week - Warna yang kontras dan tidak mirip
export const getDailyColorTheme = (): CardData["color"][] => {
  const dayOfWeek = new Date().getDay();
  const colorThemes: CardData["color"][][] = [
    ["red", "blue", "green", "amber", "purple"], // Minggu
    ["blue", "amber", "green", "red", "indigo"], // Senin
    ["green", "red", "cyan", "amber", "purple"], // Selasa
    ["purple", "green", "amber", "blue", "red"], // Rabu
    ["green", "blue", "red", "amber", "indigo"], // Kamis
    ["teal", "red", "amber", "purple", "blue"], // Jumat
    ["indigo", "amber", "green", "red", "cyan"], // Sabtu
  ];
  return colorThemes[dayOfWeek];
};

// Dynamic Layout System - Ganti layout per hari berdasarkan hari dalam minggu
export const getCurrentLayout = (): LayoutConfig => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Minggu, 1 = Senin, dst

  // 7 variasi layout untuk 7 hari (menggunakan 5 layout + 2 tambahan)
  const layouts: LayoutConfig[] = [
    {
      id: "layout1",
      name: "3-2 Layout",
      description: "3 card atas, 2 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-3", cards: 3 }, // 3 cards atas
        { cols: "grid-cols-2", cards: 2 }, // 2 cards bawah
      ],
    },
    {
      id: "layout2",
      name: "2-3 Layout",
      description: "2 card atas, 3 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-2", cards: 2 }, // 2 cards atas
        { cols: "grid-cols-3", cards: 3 }, // 3 cards bawah
      ],
    },
    {
      id: "layout3",
      name: "1-2-2 Layout",
      description: "1 card atas, 2 card tengah, 2 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-1", cards: 1 }, // 1 card atas
        { cols: "grid-cols-2", cards: 2 }, // 2 cards tengah
        { cols: "grid-cols-2", cards: 2 }, // 2 cards bawah
      ],
    },
    {
      id: "layout4",
      name: "2-1-2 Layout",
      description: "2 card atas, 1 card tengah, 2 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-2", cards: 2 }, // 2 cards atas
        { cols: "grid-cols-1", cards: 1 }, // 1 card tengah
        { cols: "grid-cols-2", cards: 2 }, // 2 cards bawah
      ],
    },
    {
      id: "layout5",
      name: "2-2-1 Layout",
      description: "2 card atas, 2 card tengah, 1 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-2", cards: 2 }, // 2 cards atas
        { cols: "grid-cols-2", cards: 2 }, // 2 cards tengah
        { cols: "grid-cols-1", cards: 1 }, // 1 card bawah
      ],
    },
    {
      id: "layout6",
      name: "1-4 Layout",
      description: "1 card atas, 4 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-1", cards: 1 }, // 1 card atas
        { cols: "grid-cols-4", cards: 4 }, // 4 cards bawah
      ],
    },
    {
      id: "layout7",
      name: "4-1 Layout",
      description: "4 card atas, 1 card bawah",
      cardSizes: ["normal", "normal", "normal", "normal", "normal"],
      gridConfig: [
        { cols: "grid-cols-4", cards: 4 }, // 4 cards atas
        { cols: "grid-cols-1", cards: 1 }, // 1 card bawah
      ],
    },
  ];

  // Cycle through layouts setiap hari berdasarkan hari dalam minggu
  const layoutIndex = dayOfWeek % layouts.length;
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

// Data mapping for cards with daily color themes - Removed entry/exit cards
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
  ];
};
