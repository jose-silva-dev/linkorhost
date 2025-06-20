"use client"

import { Globe } from "lucide-react"

const locations = [
  {
    name: "Estados Unidos",
    position: { top: "35%", left: "20%" },
    delay: "0s",
  },
  {
    name: "Canadá",
    position: { top: "25%", left: "22%" },
    delay: "0.5s",
  },
  {
    name: "Brasil",
    position: { top: "65%", left: "32%" },
    delay: "1s",
  },
  {
    name: "Portugal",
    position: { top: "32%", left: "48%" },
    delay: "1.5s",
  },
]

export function GlobalPresenceMap() {
  return (
    <section className="py-16 bg-[#0C0C17] relative overflow-hidden w-full">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="mb-12"></div>

        <div className="relative max-w-6xl mx-auto">
          {/* World Map Background */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-[#1a1a2e] rounded-2xl border border-gray-800/30 overflow-hidden">
            {/* World Map SVG - Realistic Continents */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full opacity-30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* North America */}
              <path
                d="M50 80 L180 70 L200 120 L220 140 L200 180 L180 200 L120 220 L80 200 L60 160 L50 120 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
              {/* South America */}
              <path
                d="M180 220 L220 240 L240 300 L220 380 L200 400 L180 380 L160 340 L150 280 L160 240 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
              {/* Europe */}
              <path
                d="M420 80 L480 70 L500 100 L480 140 L460 150 L440 140 L420 120 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
              {/* Africa */}
              <path
                d="M440 160 L500 150 L520 200 L510 280 L480 320 L450 300 L430 250 L440 200 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
              {/* Asia */}
              <path
                d="M520 60 L700 50 L750 100 L780 140 L760 180 L720 200 L680 180 L640 160 L600 140 L560 120 L520 100 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
              {/* Australia */}
              <path
                d="M680 320 L750 310 L770 340 L750 360 L720 350 L690 340 Z"
                stroke="#4a5568"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <div
                key={location.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={location.position}
              >
                {/* Ping Animation */}
                <div
                  className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] opacity-40 animate-ping transform rotate-45"
                  style={{
                    animationDelay: location.delay,
                    animationDuration: "3s",
                    borderRadius: "4px",
                  }}
                />

                {/* Main Diamond Marker */}
                <div className="relative w-6 h-6 bg-gradient-to-r from-[#F04339] to-[#FF6B5B] transform rotate-45 flex items-center justify-center shadow-lg shadow-[#F04339]/50">
                  <Globe className="w-3 h-3 text-white transform -rotate-45" />
                </div>

                {/* Location Label with Arrow */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Arrow pointing to marker */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[#2d3748]"></div>
                  </div>

                  {/* Label Box */}
                  <div className="bg-[#2d3748] border border-[#4a5568] rounded px-3 py-2 whitespace-nowrap">
                    <span className="text-sm font-medium text-white">{location.name}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
