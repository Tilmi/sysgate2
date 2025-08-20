// import React from "react";
// import { CardData } from "@/types/dashboard";
// import {
//   UsersIcon,
//   UserIcon,
//   WrenchScrewdriverIcon,
//   AcademicCapIcon,
//   UserGroupIcon,
//   ArrowRightCircleIcon,
//   ArrowLeftCircleIcon,
// } from "@heroicons/react/24/solid";

// interface DashboardCardProps {
//   card: CardData;
//   size?: "normal" | "large";
// }

// // Fungsi untuk mendapatkan icon component
// const getIcon = (iconName: string) => {
//   const iconMap: Record<string, React.ComponentType<any>> = {
//     UsersIcon: UsersIcon,
//     UserIcon: UserIcon,
//     WrenchScrewdriverIcon: WrenchScrewdriverIcon,
//     AcademicCapIcon: AcademicCapIcon,
//     UserGroupIcon: UserGroupIcon,
//     ArrowRightCircleIcon: ArrowRightCircleIcon,
//     ArrowLeftCircleIcon: ArrowLeftCircleIcon,
//   };

//   return iconMap[iconName] || UsersIcon;
// };

// const DashboardCard: React.FC<DashboardCardProps> = ({
//   card,
//   size = "normal",
// }) => {
//   const getIconContainerClasses = (color: CardData["color"]) => {
//     const colorMap: Record<CardData["color"], string> = {
//       green: "bg-gradient-to-br from-green-500 to-green-600",
//       blue: "bg-gradient-to-br from-blue-500 to-blue-600",
//       cyan: "bg-gradient-to-br from-cyan-500 to-cyan-600",
//       orange: "bg-gradient-to-br from-orange-500 to-orange-600",
//       red: "bg-gradient-to-br from-red-500 to-red-600",
//       purple: "bg-gradient-to-br from-purple-500 to-purple-600",
//       indigo: "bg-gradient-to-br from-indigo-500 to-indigo-600",
//     };

//     return colorMap[color] || colorMap.green;
//   };

//   const getTextColor = (color: CardData["color"]) => {
//     const colorMap: Record<CardData["color"], string> = {
//       green: "text-green-600",
//       blue: "text-blue-600",
//       cyan: "text-cyan-600",
//       orange: "text-orange-600",
//       red: "text-red-600",
//       purple: "text-purple-600",
//       indigo: "text-indigo-600",
//     };

//     return colorMap[color] || colorMap.green;
//   };

//   const isLarge = size === "large";
//   const IconComponent = getIcon(card.icon);

//   const iconContainerSize = isLarge ? "w-16 h-16" : "w-14 h-14";
//   const iconSize = isLarge ? "w-8 h-8" : "w-7 h-7";

//   return (
//     <div
//       className={`
//         bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105
//         transition-all duration-300 border border-gray-100/50 backdrop-blur-sm
//         relative overflow-hidden
//         ${isLarge ? "col-span-2 md:col-span-1" : ""}
//       `}
//     >
//       <div className="flex items-start justify-between mb-6">
//         <div
//           className={`
//             ${iconContainerSize}
//             ${getIconContainerClasses(card.color)}
//             rounded-2xl flex items-center justify-center shadow-lg
//           `}
//         >
//           <IconComponent className={`text-white ${iconSize}`} />
//         </div>
//         {isLarge && (
//           <div className="w-2 h-2 rounded-full bg-gray-300 animate-ping" />
//         )}
//       </div>

//       <div className="space-y-3">
//         <div
//           className={`
//             font-semibold text-gray-600
//             ${isLarge ? "text-lg" : "text-base"}
//           `}
//         >
//           {card.title}
//         </div>

//         <div
//           className={`
//             font-black ${getTextColor(card.color)}
//             ${isLarge ? "text-5xl" : "text-4xl"}
//           `}
//         >
//           {card.value.toLocaleString("id-ID")}
//         </div>
//       </div>

//       {/* Subtle shine effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
//     </div>
//   );
// };

// export default DashboardCard;
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

// Function to get icon component
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

// Updated colors - icon warna sama dengan card background
const getCardColors = (
  color: CardData["color"],
  isDark: boolean
): ColorTheme => {
  const lightColors: Record<CardData["color"], ColorTheme> = {
    green: {
      bg: "bg-gradient-to-br from-green-400 to-green-500",
      icon: "bg-gradient-to-br from-green-500 to-green-600", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-green-600",
      shadow: "", // Removed shadow
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: "bg-gradient-to-br from-blue-600 to-blue-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-blue-700",
      shadow: "", // Removed shadow
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      icon: "bg-gradient-to-br from-cyan-500 to-cyan-600", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-cyan-600",
      shadow: "", // Removed shadow
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-400 to-orange-500",
      icon: "bg-gradient-to-br from-orange-500 to-orange-600", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-orange-600",
      shadow: "", // Removed shadow
    },
    red: {
      bg: "bg-gradient-to-br from-red-500 to-red-600",
      icon: "bg-gradient-to-br from-red-600 to-red-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-red-700",
      shadow: "", // Removed shadow
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: "bg-gradient-to-br from-purple-600 to-purple-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-purple-700",
      shadow: "", // Removed shadow
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      icon: "bg-gradient-to-br from-indigo-600 to-indigo-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-indigo-700",
      shadow: "", // Removed shadow
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-500 to-pink-600",
      icon: "bg-gradient-to-br from-pink-600 to-pink-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-pink-700",
      shadow: "", // Removed shadow
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-400 to-teal-500",
      icon: "bg-gradient-to-br from-teal-500 to-teal-600", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-teal-600",
      shadow: "", // Removed shadow
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-400 to-amber-500",
      icon: "bg-gradient-to-br from-amber-500 to-amber-600", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-amber-600",
      shadow: "", // Removed shadow
    },
  };

  const darkColors: Record<CardData["color"], ColorTheme> = {
    green: {
      bg: "bg-gradient-to-br from-green-600 to-green-700",
      icon: "bg-gradient-to-br from-green-700 to-green-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-green-400",
      shadow: "", // Removed shadow
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: "bg-gradient-to-br from-blue-700 to-blue-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-blue-400",
      shadow: "", // Removed shadow
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      icon: "bg-gradient-to-br from-cyan-600 to-cyan-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-cyan-400",
      shadow: "", // Removed shadow
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: "bg-gradient-to-br from-orange-600 to-orange-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-orange-400",
      shadow: "", // Removed shadow
    },
    red: {
      bg: "bg-gradient-to-br from-red-600 to-red-700",
      icon: "bg-gradient-to-br from-red-700 to-red-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-red-400",
      shadow: "", // Removed shadow
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-600 to-purple-700",
      icon: "bg-gradient-to-br from-purple-700 to-purple-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-purple-400",
      shadow: "", // Removed shadow
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-600 to-indigo-700",
      icon: "bg-gradient-to-br from-indigo-700 to-indigo-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-indigo-400",
      shadow: "", // Removed shadow
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-600 to-pink-700",
      icon: "bg-gradient-to-br from-pink-700 to-pink-800", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-pink-400",
      shadow: "", // Removed shadow
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-500 to-teal-600",
      icon: "bg-gradient-to-br from-teal-600 to-teal-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-teal-400",
      shadow: "", // Removed shadow
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-500 to-amber-600",
      icon: "bg-gradient-to-br from-amber-600 to-amber-700", // Same as card color
      text: "text-white",
      value: "text-white",
      border: "border-amber-400",
      shadow: "", // Removed shadow
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

  const iconContainerSize = isLarge ? "w-16 h-16" : "w-14 h-14";
  const iconSize = isLarge ? "w-8 h-8" : "w-7 h-7";

  return (
    <div
      className={`
        ${colors.bg} ${colors.border}
        rounded-2xl p-4 transform hover:scale-105 
        transition-all duration-300 border-2 backdrop-blur-sm
        relative overflow-hidden
        ${isLarge ? "col-span-2 md:col-span-1" : ""}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`
            ${iconContainerSize} 
            ${colors.icon} 
            rounded-2xl flex items-center justify-center
          `}
        >
          <IconComponent className={`text-white ${iconSize} drop-shadow-lg`} />
        </div>
        {isLarge && (
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-ping" />
        )}
      </div>

      <div className="space-y-2">
        <div
          className={`
            font-black tracking-wide leading-tight ${colors.text}
            ${isLarge ? "text-lg" : "text-base"}
            drop-shadow-lg
          `}
        >
          {card.title}
        </div>

        <div
          className={`
            font-black tracking-tighter ${colors.value} 
            ${isLarge ? "text-6xl" : "text-6xl"}
            drop-shadow-xl
            leading-none
          `}
        >
          {card.value.toLocaleString("id-ID")}
        </div>
      </div>

      {/* Enhanced shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1500 pointer-events-none" />
    </div>
  );
};

export default DashboardCard;
