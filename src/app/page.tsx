// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import DashboardCard from "@/component/DashboardCard";
// import StatusIndicator from "@/component/StatusIndicator";
// import {
//   getDashboardData,
//   getGateStatus,
//   getCardMappings,
// } from "@/data/mockData";
// import { DashboardData, GateStatus } from "@/types/dashboard";

// const Home: React.FC = () => {
//   const [dashboardData, setDashboardData] = useState<DashboardData | null>(
//     null
//   );
//   const [gateStatus, setGateStatus] = useState<GateStatus | null>(null);
//   const [currentTime, setCurrentTime] = useState<string>("");

//   // Update data setiap detik
//   useEffect(() => {
//     const updateData = () => {
//       setDashboardData(getDashboardData());
//       setGateStatus(getGateStatus());
//       setCurrentTime(
//         new Date().toLocaleString("id-ID", {
//           weekday: "long",
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         })
//       );
//     };

//     // Update immediately
//     updateData();

//     // Set interval untuk update setiap detik (1000ms)
//     const interval = setInterval(updateData, 1000);

//     // Cleanup interval on unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Loading state
//   if (!dashboardData || !gateStatus) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-slate-600">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   const cards = getCardMappings(dashboardData);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Header */}
//       <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-lg sticky top-0 z-10">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             {/* Title Section */}
//             <div className="flex items-center gap-4">
//               <Image
//                 src="/cikampek.png"
//                 alt="Logo"
//                 width={48}
//                 height={48}
//                 className="w-12 h-12"
//               />
//               <div>
//                 <h1 className="text-3xl font-black text-slate-800 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
//                   PUPUK KUJANG - GATE S04
//                 </h1>
//                 <p className="text-1xl text-slate-500 mt-1">{currentTime}</p>
//               </div>
//             </div>

//             {/* Status Section */}
//             <div className="flex items-center gap-4">
//               <StatusIndicator status={gateStatus} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dashboard Content */}
//       <div className="container mx-auto mt-4 p-4">
//         {/* Cards Grid */}
//         <div className="space-y-6">
//           {/* Row 1: 3 cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <DashboardCard card={cards[0]} size="large" />
//             <DashboardCard card={cards[1]} />
//             <DashboardCard card={cards[2]} />
//           </div>

//           {/* Row 2: 2 cards centered */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <DashboardCard card={cards[3]} />
//             <DashboardCard card={cards[4]} />
//           </div>

//           {/* Row 3: 2 cards baru untuk data masuk dan keluar */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <DashboardCard card={cards[5]} />
//             <DashboardCard card={cards[6]} />
//           </div>
//         </div>

//         {/* Last Updated Info */}
//         <div className="text-center mt-8 text-sm text-slate-500">
//           Data terakhir diperbarui: {dashboardData.lastUpdated}
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl" />
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DashboardCard from "@/component/DashboardCard";
import StatusIndicator from "@/component/StatusIndicator";
import {
  getDashboardData,
  getGateStatus,
  getCardMappings,
  checkDarkMode,
  getCurrentLayout,
} from "@/data/mockData";
import { DashboardData, GateStatus, LayoutConfig } from "@/types/dashboard";

const Home: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [gateStatus, setGateStatus] = useState<GateStatus | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(false);
  const [currentLayout, setCurrentLayout] = useState<LayoutConfig | null>(null);

  // Update data every second
  useEffect(() => {
    const updateData = () => {
      setDashboardData(getDashboardData());
      setGateStatus(getGateStatus());
      setIsDark(checkDarkMode());
      setCurrentLayout(getCurrentLayout());
      setCurrentTime(
        new Date().toLocaleString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    // Update immediately
    updateData();

    // Set interval to update every second (1000ms)
    const interval = setInterval(updateData, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Loading state
  if (!dashboardData || !gateStatus || !currentLayout) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark
            ? "bg-gradient-to-br from-gray-950 to-slate-900"
            : "bg-gradient-to-br from-slate-50 to-slate-100"
        }`}
      >
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p
            className={`text-xl font-semibold ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  const cards = getCardMappings(dashboardData);

  // Render cards according to the current layout
  const renderCardsWithLayout = () => {
    let cardIndex = 0;

    return currentLayout.gridConfig.map((rowConfig, rowIndex) => {
      const rowCards = cards.slice(cardIndex, cardIndex + rowConfig.cards);
      cardIndex += rowConfig.cards;

      return (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 ${rowConfig.cols} gap-8`}
        >
          {rowCards.map((card, index) => {
            const cardSize =
              currentLayout.cardSizes[cardIndex - rowConfig.cards + index];
            return (
              <DashboardCard
                key={card.id}
                card={card}
                size={cardSize}
                isDark={isDark}
              />
            );
          })}
        </div>
      );
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      }`}
    >
      {/* Enhanced Header */}
      <div
        className={`backdrop-blur-md border-b sticky top-0 z-10 transition-colors duration-1000 ${
          isDark
            ? "bg-gray-900/90 border-gray-700/50 shadow-xl shadow-gray-900/50"
            : "bg-white/90 border-white/20 shadow-xl shadow-gray-200/50"
        }`}
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title Section */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Image
                  src="/cikampek.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 drop-shadow-lg"
                />
              </div>
              <div>
                <h1
                  className={`text-5xl font-black tracking-tight leading-tight bg-gradient-to-r bg-clip-text text-transparent drop-shadow-lg ${
                    isDark
                      ? "from-blue-300 to-indigo-300"
                      : "from-slate-800 to-slate-600"
                  }`}
                >
                  PUPUK KUJANG - GATE S04
                </h1>
                <p
                  className={`text-2xl font-bold mt-2 ${
                    isDark ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  {currentTime}
                </p>
                {/* Layout indicator for demo */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    Layout: {currentLayout.name} - {currentLayout.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="flex items-center gap-6">
              <StatusIndicator status={gateStatus} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content with Dynamic Layout */}
      <div className="container mx-auto mt-8 p-8">
        {/* Cards Grid with Dynamic Layout */}
        <div className="space-y-8 transition-all duration-700 ease-in-out">
          {renderCardsWithLayout()}
        </div>

        {/* Layout Info */}
        <div
          className={`text-center mt-8 p-4 rounded-xl border transition-colors duration-1000 ${
            isDark
              ? "bg-gray-800/50 border-gray-700 text-gray-300"
              : "bg-white/50 border-gray-200 text-slate-600"
          }`}
        >
          <div className="text-sm font-medium">
            Current Layout:{" "}
            <span className="font-bold">{currentLayout.name}</span>
          </div>
          <div className="text-xs mt-1 opacity-75">
            {currentLayout.description} • Changes every minute for demo
          </div>
        </div>

        {/* Last Updated Info */}
        <div
          className={`text-center mt-8 text-lg font-semibold ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Data terakhir diperbarui: {dashboardData.lastUpdated}
        </div>
      </div>

      {/* Enhanced Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
            isDark
              ? "bg-gradient-to-br from-blue-600/20 to-indigo-800/20"
              : "bg-gradient-to-br from-blue-400/20 to-indigo-600/20"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
            isDark
              ? "bg-gradient-to-br from-green-600/20 to-emerald-800/20"
              : "bg-gradient-to-br from-green-400/20 to-emerald-600/20"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl transition-opacity duration-1000 ${
            isDark
              ? "bg-gradient-to-br from-purple-600/10 to-pink-800/10"
              : "bg-gradient-to-br from-purple-400/10 to-pink-600/10"
          }`}
        />
      </div>
    </div>
  );
};

export default Home;
