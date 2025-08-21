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

    updateData();

    const interval = setInterval(updateData, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div
        className={`backdrop-blur-md border-b sticky top-0 z-10 transition-colors duration-1000 ${
          isDark
            ? "bg-gray-900/90 border-gray-700/50 shadow-xl shadow-gray-900/50"
            : "bg-white/90 border-white/20 shadow-xl shadow-gray-200/50"
        }`}
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
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
                  className={`text-4xl font-black tracking-tight leading-tight bg-gradient-to-r bg-clip-text text-transparent drop-shadow-lg ${
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
              </div>
            </div>

            <div className="flex items-center gap-6">
              <StatusIndicator status={gateStatus} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-8">
        <div className="space-y-8 transition-all duration-700 ease-in-out">
          {renderCardsWithLayout()}
        </div>

        <div
          className={`text-center mt-8 text-lg font-semibold ${
            isDark ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Data terakhir diperbarui: {dashboardData.lastUpdated}
        </div>
      </div>

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
