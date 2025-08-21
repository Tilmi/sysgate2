import React from "react";
import { CardData, ColorTheme } from "@/types/dashboard";
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
  isDark: boolean;
}

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

const getCardColors = (
  color: CardData["color"],
  isDark: boolean
): ColorTheme => {
  const lightColors: Record<CardData["color"], ColorTheme> = {
    green: {
      bg: "bg-gradient-to-br from-green-400 to-green-500",
      icon: "bg-gradient-to-br from-green-500 to-green-600",
      text: "text-white",
      value: "text-white",
      border: "border-green-600",
      shadow: "",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: "bg-gradient-to-br from-blue-600 to-blue-700",
      text: "text-white",
      value: "text-white",
      border: "border-blue-700",
      shadow: "",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      icon: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      text: "text-white",
      value: "text-white",
      border: "border-cyan-600",
      shadow: "",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-400 to-orange-500",
      icon: "bg-gradient-to-br from-orange-500 to-orange-600",
      text: "text-white",
      value: "text-white",
      border: "border-orange-600",
      shadow: "",
    },
    red: {
      bg: "bg-gradient-to-br from-red-500 to-red-600",
      icon: "bg-gradient-to-br from-red-600 to-red-700",
      text: "text-white",
      value: "text-white",
      border: "border-red-700",
      shadow: "",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: "bg-gradient-to-br from-purple-600 to-purple-700",
      text: "text-white",
      value: "text-white",
      border: "border-purple-700",
      shadow: "",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      icon: "bg-gradient-to-br from-indigo-600 to-indigo-700",
      text: "text-white",
      value: "text-white",
      border: "border-indigo-700",
      shadow: "",
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-500 to-pink-600",
      icon: "bg-gradient-to-br from-pink-600 to-pink-700",
      text: "text-white",
      value: "text-white",
      border: "border-pink-700",
      shadow: "",
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-400 to-teal-500",
      icon: "bg-gradient-to-br from-teal-500 to-teal-600",
      text: "text-white",
      value: "text-white",
      border: "border-teal-600",
      shadow: "",
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-400 to-amber-500",
      icon: "bg-gradient-to-br from-amber-500 to-amber-600",
      text: "text-white",
      value: "text-white",
      border: "border-amber-600",
      shadow: "",
    },
  };

  const darkColors: Record<CardData["color"], ColorTheme> = {
    green: {
      bg: "bg-gradient-to-br from-green-600 to-green-700",
      icon: "bg-gradient-to-br from-green-700 to-green-800",
      text: "text-white",
      value: "text-white",
      border: "border-green-400",
      shadow: "",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: "bg-gradient-to-br from-blue-700 to-blue-800",
      text: "text-white",
      value: "text-white",
      border: "border-blue-400",
      shadow: "",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      icon: "bg-gradient-to-br from-cyan-600 to-cyan-700",
      text: "text-white",
      value: "text-white",
      border: "border-cyan-400",
      shadow: "",
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: "bg-gradient-to-br from-orange-600 to-orange-700",
      text: "white",
      value: "text-white",
      border: "border-orange-400",
      shadow: "",
    },
    red: {
      bg: "bg-gradient-to-br from-red-600 to-red-700",
      icon: "bg-gradient-to-br from-red-700 to-red-800",
      text: "text-white",
      value: "text-white",
      border: "border-red-400",
      shadow: "",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-600 to-purple-700",
      icon: "bg-gradient-to-br from-purple-700 to-purple-800",
      text: "text-white",
      value: "text-white",
      border: "border-purple-400",
      shadow: "",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-600 to-indigo-700",
      icon: "bg-gradient-to-br from-indigo-700 to-indigo-800",
      text: "text-white",
      value: "text-white",
      border: "border-indigo-400",
      shadow: "",
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-600 to-pink-700",
      icon: "bg-gradient-to-br from-pink-700 to-pink-800",
      text: "text-white",
      value: "text-white",
      border: "border-pink-400",
      shadow: "",
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-500 to-teal-600",
      icon: "bg-gradient-to-br from-teal-600 to-teal-700",
      text: "text-white",
      value: "text-white",
      border: "border-teal-400",
      shadow: "",
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-500 to-amber-600",
      icon: "bg-gradient-to-br from-amber-600 to-amber-700",
      text: "text-white",
      value: "text-white",
      border: "border-amber-400",
      shadow: "",
    },
  };

  return isDark ? darkColors[color] : lightColors[color];
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  card,
  size = "normal",
  isDark,
}) => {
  const isLarge = size === "large";
  const IconComponent = getIcon(card.icon);
  const colors = getCardColors(card.color, isDark);

  // Ukuran icon yang pas
  const iconContainerSize = isLarge ? "w-18 h-18" : "w-16 h-16";
  const iconSize = isLarge ? "w-9 h-9" : "w-8 h-8";

  return (
    <div
      className={`
        ${colors.bg} ${colors.border}
        rounded-2xl transform hover:scale-105 
        transition-all duration-300 border-2 backdrop-blur-sm
        relative overflow-hidden min-h-48
        ${isLarge ? "col-span-2 md:col-span-1 p-6" : "p-5"}
      `}
    >
      {/* Header dengan icon dan title sejajar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className={`
              ${iconContainerSize} 
              ${colors.icon} 
              rounded-2xl flex items-center justify-center flex-shrink-0
            `}
          >
            <IconComponent
              className={`text-white ${iconSize} drop-shadow-lg`}
            />
          </div>
          <div
            className={`
              font-black tracking-wide leading-tight ${colors.text}
              ${isLarge ? "text-2xl" : "text-xl"}
              drop-shadow-lg
            `}
          >
            {card.title}
          </div>
        </div>
        {isLarge && (
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
        )}
      </div>

      {/* Value di bawah dengan unit "orang" */}
      <div className="flex items-end gap-3">
        <div
          className={`
            font-black tracking-tighter ${colors.value} 
            ${isLarge ? "text-7xl" : "text-6xl"}
            drop-shadow-xl
            leading-none
          `}
        >
          {card.value.toLocaleString("id-ID")}
        </div>
        <div
          className={`
            font-bold ${colors.text}
            ${isLarge ? "text-2xl" : "text-xl"}
            drop-shadow-lg
            mb-2
          `}
        >
          orang
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1500 pointer-events-none" />
    </div>
  );
};

export default DashboardCard;
