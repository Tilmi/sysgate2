"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DashboardCard from "@/component/DashboardCard";
import StatusIndicator from "@/component/StatusIndicator";
import {
  getDashboardData,
  getGateStatus,
  getCardMappings,
} from "@/data/mockData";
import { DashboardData, GateStatus } from "@/types/dashboard";

const Home: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [gateStatus, setGateStatus] = useState<GateStatus | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update data setiap detik
  useEffect(() => {
    const updateData = () => {
      setDashboardData(getDashboardData());
      setGateStatus(getGateStatus());
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

    // Set interval untuk update setiap detik (1000ms)
    const interval = setInterval(updateData, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Loading state
  if (!dashboardData || !gateStatus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const cards = getCardMappings(dashboardData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Title Section */}
            <div className="flex items-center gap-4">
              <Image
                src="/cikampek.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-3xl font-black text-slate-800 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                  PUPUK KUJANG - GATE S04
                </h1>
                <p className="text-sm text-slate-500 mt-1">{currentTime}</p>
              </div>
            </div>

            {/* Status Section */}
            <div className="flex items-center gap-4">
              <StatusIndicator status={gateStatus} />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto mt-4 p-4">
        {/* Cards Grid */}
        <div className="space-y-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard card={cards[0]} size="large" />
            <DashboardCard card={cards[1]} />
            <DashboardCard card={cards[2]} />
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard card={cards[3]} />
            <DashboardCard card={cards[4]} />
          </div>

          {/* Row 3: 2 cards baru untuk data masuk dan keluar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard card={cards[5]} />
            <DashboardCard card={cards[6]} />
          </div>
        </div>

        {/* Last Updated Info */}
        <div className="text-center mt-8 text-sm text-slate-500">
          Data terakhir diperbarui: {dashboardData.lastUpdated}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Home;
