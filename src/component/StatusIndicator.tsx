import React from "react";
import { GateStatus } from "@/types/dashboard";

interface StatusIndicatorProps {
  status: GateStatus;
  isDark: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  isDark,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-4 h-4 rounded-full ${
            status.isOnline
              ? "bg-green-400 shadow-lg shadow-green-400/60 animate-pulse"
              : "bg-red-400 shadow-lg shadow-red-400/60"
          }`}
        />
        <span
          className={`text-lg font-black tracking-wide ${
            isDark
              ? status.isOnline
                ? "text-green-300"
                : "text-red-300"
              : status.isOnline
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          {status.isOnline ? "ONLINE" : "OFFLINE"}
        </span>
      </div>
      <div
        className={`text-base font-semibold ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Update: {status.lastUpdate}
      </div>
    </div>
  );
};

export default StatusIndicator;
