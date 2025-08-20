import React from "react";
import { CardData } from "@/types/dashboard";
import {
  UsersIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

interface DashboardCardProps {
  card: CardData;
  size?: "normal" | "large";
}

// Fungsi untuk mendapatkan icon component
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    UsersIcon: UsersIcon,
    UserIcon: UserIcon,
    WrenchScrewdriverIcon: WrenchScrewdriverIcon,
    AcademicCapIcon: AcademicCapIcon,
    UserGroupIcon: UserGroupIcon,
    ArrowRightCircleIcon: ArrowRightCircleIcon,
    ArrowLeftCircleIcon: ArrowLeftCircleIcon,
  };

  return iconMap[iconName] || UsersIcon;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  card,
  size = "normal",
}) => {
  const getIconContainerClasses = (color: CardData["color"]) => {
    const colorMap: Record<CardData["color"], string> = {
      green: "bg-gradient-to-br from-green-500 to-green-600",
      blue: "bg-gradient-to-br from-blue-500 to-blue-600",
      cyan: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      orange: "bg-gradient-to-br from-orange-500 to-orange-600",
      red: "bg-gradient-to-br from-red-500 to-red-600",
      purple: "bg-gradient-to-br from-purple-500 to-purple-600",
      indigo: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    };

    return colorMap[color] || colorMap.green;
  };

  const getTextColor = (color: CardData["color"]) => {
    const colorMap: Record<CardData["color"], string> = {
      green: "text-green-600",
      blue: "text-blue-600",
      cyan: "text-cyan-600",
      orange: "text-orange-600",
      red: "text-red-600",
      purple: "text-purple-600",
      indigo: "text-indigo-600",
    };

    return colorMap[color] || colorMap.green;
  };

  const isLarge = size === "large";
  const IconComponent = getIcon(card.icon);

  const iconContainerSize = isLarge ? "w-16 h-16" : "w-14 h-14";
  const iconSize = isLarge ? "w-8 h-8" : "w-7 h-7";

  return (
    <div
      className={`
        bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 
        transition-all duration-300 border border-gray-100/50 backdrop-blur-sm
        relative overflow-hidden
        ${isLarge ? "col-span-2 md:col-span-1" : ""}
      `}
    >
      <div className="flex items-start justify-between mb-6">
        <div
          className={`
            ${iconContainerSize} 
            ${getIconContainerClasses(card.color)} 
            rounded-2xl flex items-center justify-center shadow-lg
          `}
        >
          <IconComponent className={`text-white ${iconSize}`} />
        </div>
        {isLarge && (
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-ping" />
        )}
      </div>

      <div className="space-y-3">
        <div
          className={`
            font-semibold text-gray-600 
            ${isLarge ? "text-lg" : "text-base"}
          `}
        >
          {card.title}
        </div>

        <div
          className={`
            font-black ${getTextColor(card.color)} 
            ${isLarge ? "text-5xl" : "text-4xl"}
          `}
        >
          {card.value.toLocaleString("id-ID")}
        </div>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
    </div>
  );
};

export default DashboardCard;
