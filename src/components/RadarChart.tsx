import React, { useState } from 'react';

export interface DomainScore {
  name: string;
  shortName: string;
  value: number; // 0 to 100
}

interface RadarChartProps {
  className?: string;
  interactive?: boolean;
}

const PRESETS: Record<string, { label: string; scores: number[] }> = {
  balanced: {
    label: 'Harmonis',
    scores: [78, 72, 85, 70, 75],
  },
  exam: {
    label: 'Minggu Ujian',
    scores: [95, 55, 60, 50, 65],
  },
  career: {
    label: 'Magang / Karier',
    scores: [70, 92, 65, 60, 80],
  },
};

interface LabelConfig {
  lines: string[];
  x: number;
  y: number;
  anchor: 'middle' | 'start' | 'end';
}

export const RadarChart: React.FC<RadarChartProps> = ({
  className = '',
  interactive = true,
}) => {
  const [activePreset, setActivePreset] = useState<string>('balanced');
  const [scores, setScores] = useState<number[]>([78, 72, 85, 70, 75]);

  const handleSelectPreset = (key: string) => {
    setActivePreset(key);
    setScores(PRESETS[key].scores);
  };

  // Center and radius calibrated to keep all labels 100% inside container
  const centerX = 130;
  const centerY = 102;
  const radius = 50;
  const totalAxes = 5;

  // Calculate coordinates for any point given angle index and value percentage
  const getCoordinates = (index: number, valuePct: number) => {
    // Start from top (-90 deg)
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (valuePct / 100) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return { x, y };
  };

  // Concentric polygon background grids
  const gridLevels = [0.35, 0.65, 1];

  // Polygon points for data
  const dataPolygonPoints = scores
    .map((val, idx) => {
      const { x, y } = getCoordinates(idx, val);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  // Labels with multiline formatting and strictly bounded anchors
  const labels: LabelConfig[] = [
    {
      lines: ['Akademik'],
      x: centerX,
      y: centerY - radius - 14,
      anchor: 'middle',
    },
    {
      lines: ['Karier'],
      x: centerX + radius + 10,
      y: centerY - 14,
      anchor: 'start',
    },
    {
      lines: ['Sosial &', 'Organisasi'],
      x: centerX + radius * 0.6 + 6,
      y: centerY + radius * 0.82 + 10,
      anchor: 'start',
    },
    {
      lines: ['Kesejahteraan'],
      x: centerX - radius * 0.6 - 6,
      y: centerY + radius * 0.82 + 10,
      anchor: 'end',
    },
    {
      lines: ['Pengembangan', 'Diri'],
      x: centerX - radius - 8,
      y: centerY - 14,
      anchor: 'end',
    },
  ];

  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`}>
      {/* SVG Canvas enclosed strictly within card boundaries */}
      <div className="w-full max-w-[250px] aspect-[260/205] flex items-center justify-center">
        <svg
          viewBox="-4 0 268 205"
          className="w-full h-full overflow-visible"
        >
          {/* Background Concentric Radar Rings */}
          {gridLevels.map((lvl, lvlIdx) => {
            const points = Array.from({ length: totalAxes })
              .map((_, i) => {
                const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
                const r = lvl * radius;
                return `${(centerX + r * Math.cos(angle)).toFixed(1)},${(centerY + r * Math.sin(angle)).toFixed(1)}`;
              })
              .join(' ');

            return (
              <polygon
                key={`grid-${lvlIdx}`}
                points={points}
                fill={lvlIdx === gridLevels.length - 1 ? 'rgba(163, 196, 235, 0.12)' : 'none'}
                stroke="currentColor"
                strokeWidth="1"
                className="text-[#BED6F3] dark:text-[#254266]"
                strokeDasharray={lvlIdx < 2 ? '2,2' : undefined}
              />
            );
          })}

          {/* Radial axis lines */}
          {Array.from({ length: totalAxes }).map((_, i) => {
            const { x, y } = getCoordinates(i, 100);
            return (
              <line
                key={`axis-${i}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-[#BED6F3] dark:text-[#233F63]"
              />
            );
          })}

          {/* Data Polygon Area */}
          <polygon
            points={dataPolygonPoints}
            fill="rgba(163, 196, 235, 0.45)"
            stroke="#1D70E2"
            strokeWidth="2"
            className="transition-all duration-700 ease-out drop-shadow-sm"
          />

          {/* Data Vertices */}
          {scores.map((val, i) => {
            const { x, y } = getCoordinates(i, val);
            return (
              <g key={`point-${i}`} className="transition-all duration-700 ease-out">
                <circle
                  cx={x}
                  cy={y}
                  r="3.5"
                  fill="#FFFFFF"
                  stroke="#0E529F"
                  strokeWidth="2"
                  className="filter drop-shadow-xs"
                />
              </g>
            );
          })}

          {/* Axis Labels positioned safely inside SVG boundaries */}
          {labels.map((item, i) => (
            <text
              key={`label-${i}`}
              x={item.x}
              y={item.y}
              textAnchor={item.anchor}
              className="text-[9px] font-bold fill-[#102A4C] dark:fill-[#A3C4EB] transition-colors"
            >
              {item.lines.map((line, lineIdx) => (
                <tspan
                  key={lineIdx}
                  x={item.x}
                  dy={lineIdx === 0 ? 0 : 10}
                >
                  {line}
                </tspan>
              ))}
            </text>
          ))}
        </svg>
      </div>

      {/* Preset Filter Tabs */}
      {interactive && (
        <div className="w-full mt-2 flex flex-wrap items-center justify-center gap-1.5 px-0.5">
          {Object.entries(PRESETS).map(([key, item]) => {
            const isActive = activePreset === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectPreset(key)}
                className={`px-2.5 py-1 text-[10px] sm:text-[10.5px] rounded-full transition-all duration-200 cursor-pointer font-semibold leading-tight text-center ${
                  isActive
                    ? 'bg-[#1D70E2] text-white shadow-xs font-bold scale-[1.02] ring-2 ring-[#1D70E2]/30'
                    : 'bg-[#EBF3FC] dark:bg-[#15263F] text-[#2C4F77] dark:text-[#9AB8DA] hover:bg-[#DCEBFB] dark:hover:bg-[#1D3556] hover:text-[#102A4C] dark:hover:text-white border border-[#CDE1F7] dark:border-[#1E3A60]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
