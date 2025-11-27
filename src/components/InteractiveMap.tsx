import { useState } from "react";
import { Users, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface MapData {
  clients: number;
  cities: number;
  states: number;
}

const InteractiveMap = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [mapData] = useState<MapData>({
    clients: 3654,
    cities: 379,
    states: 24
  });

  const brazilPaths = [
    // Simplified Brazil regions SVG paths
    "M300,150 L350,140 L380,160 L390,200 L370,230 L340,220 Z", // Norte
    "M340,220 L370,230 L390,250 L380,280 L350,270 L330,250 Z", // Nordeste
    "M280,280 L330,250 L350,270 L340,310 L300,320 Z", // Centro-Oeste
    "M350,270 L380,280 L390,320 L380,360 L350,350 Z", // Sudeste
    "M300,320 L340,310 L350,350 L330,390 L290,380 Z"  // Sul
  ];

  const stats = [
    {
      id: "clients",
      icon: Users,
      value: mapData.clients.toLocaleString('pt-BR'),
      label: "Clientes Atendidos",
      color: "from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))]",
      textColor: "text-[hsl(var(--brand-red))]"
    },
    {
      id: "cities",
      icon: Building2,
      value: mapData.cities,
      label: "Cidades",
      color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80",
      textColor: "text-[hsl(var(--primary))]"
    },
    {
      id: "states",
      icon: MapPin,
      value: mapData.states,
      label: "Estados",
      color: "from-[hsl(var(--brand-red-dark))] to-[hsl(var(--brand-red))]",
      textColor: "text-[hsl(var(--brand-red-dark))]"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[hsl(var(--background))] to-[hsl(var(--muted))] rounded-3xl p-8 shadow-[var(--shadow-elegant)]">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-[hsl(var(--foreground))]">Atendendo com </span>
        <span className="text-[hsl(var(--brand-red))]">Excelência</span>
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Interactive Brazil Map */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
          <motion.svg
            width="400"
            height="500"
            viewBox="0 0 500 600"
            className="w-full max-w-md h-auto drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Background glow */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(0, 91%, 55%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(0, 84%, 45%)" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Map regions */}
            {brazilPaths.map((path, index) => (
              <motion.path
                key={index}
                d={path}
                fill="url(#mapGradient)"
                stroke="hsl(0, 91%, 65%)"
                strokeWidth="2"
                filter="url(#glow)"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                whileHover={{ 
                  fill: "hsl(0, 91%, 65%)",
                  transition: { duration: 0.3 }
                }}
              />
            ))}

            {/* Animated dots for cities */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={280 + Math.random() * 120}
                cy={200 + Math.random() * 200}
                r="4"
                fill="white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </motion.svg>
        </div>

        {/* Statistics */}
        <div className="flex-1 space-y-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredStat(stat.id)}
                onHoverEnd={() => setHoveredStat(null)}
                className="flex items-center gap-4 p-4 bg-[hsl(var(--card))] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}
                  animate={{
                    scale: hoveredStat === stat.id ? 1.1 : 1,
                    rotate: hoveredStat === stat.id ? 360 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <motion.p
                    className={`text-3xl font-bold ${stat.textColor}`}
                    animate={{
                      scale: hoveredStat === stat.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[hsl(var(--brand-red))] to-[hsl(var(--brand-red-dark))] rounded-2xl shadow-[var(--shadow-red)] transform rotate-12 animate-fade-in"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-[hsl(var(--primary))] rounded-xl transform -rotate-12 animate-fade-in"></div>
    </div>
  );
};

export default InteractiveMap;
