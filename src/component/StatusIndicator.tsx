import React from "react";
import { GateStatus } from "@/types/dashboard";

interface StatusIndicatorProps {
  status: GateStatus;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            status.isOnline
              ? "bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"
              : "bg-red-500 shadow-lg shadow-red-500/50"
          }`}
        />
        <span
          className={`text-sm font-semibold ${
            status.isOnline ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.isOnline ? "ONLINE" : "OFFLINE"}
        </span>
      </div>
      <div className="text-xs text-gray-500">Update: {status.lastUpdate}</div>
    </div>
  );
};

export default StatusIndicator;
