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
    ["blue", "cyan", "teal", "green", "purple"], // Minggu
    ["green", "blue", "cyan", "orange", "red"], // Senin
    ["orange", "amber", "red", "pink", "purple"], // Selasa
    ["purple", "indigo", "blue", "cyan", "green"], // Rabu
    ["red", "pink", "purple", "indigo", "blue"], // Kamis
    ["cyan", "teal", "green", "blue", "purple"], // Jumat
    ["amber", "orange", "red", "purple", "pink"], // Sabtu
  ];
  return colorThemes[dayOfWeek];
};

// Dynamic Layout System - 5 variasi layout sesuai permintaan
export const getCurrentLayout = (): LayoutConfig => {
  const now = new Date();
  const minute = now.getMinutes();

  // 5 variasi layout untuk 5 cards
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
