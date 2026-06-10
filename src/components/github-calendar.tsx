"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendarWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <GitHubCalendar
      username="amanpratap-223"
      colorScheme="dark"
      theme={{
        dark: [
          "rgba(255, 255, 255, 0.10)",
          "hsl(172, 96%, 18%)",
          "hsl(172, 96%, 28%)",
          "hsl(172, 96%, 38%)",
          "hsl(172, 96%, 48%)",
        ],
      }}
      blockRadius={20}
      blockSize={16}
      fontSize={12}
      style={{ width: "100%", height: "100%" }}
      blockMargin={2}
    />
  );
}
