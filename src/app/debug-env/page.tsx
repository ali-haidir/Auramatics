"use client";

import { useEffect, useState } from "react";

export default function DebugEnv() {
  const [envVars, setEnvVars] = useState<Record<string, string>>({});

  useEffect(() => {
    setEnvVars({
      NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY || "NOT_FOUND",
      NODE_ENV: process.env.NODE_ENV || "NOT_FOUND",
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Environment Variables Debug</h1>
      <div className="space-y-2">
        {Object.entries(envVars).map(([key, value]) => (
          <div key={key} className="flex gap-4">
            <span className="font-mono font-bold">{key}:</span>
            <span className="font-mono">
              {key.includes("API_KEY") 
                ? value === "NOT_FOUND" 
                  ? "❌ NOT_FOUND" 
                  : `✅ ${value.substring(0, 10)}...`
                : value
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
