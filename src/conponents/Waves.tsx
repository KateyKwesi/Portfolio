export default function TerrainWaves() {
  return (
    <div className="w-full absolute -z-10 bottom-0 overflow-hidden bg-orange-500">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-8"
      >
        <style>
          {`
            .wave1 { animation: waveMove 12s linear infinite; }
            .wave2 { animation: waveMove 18s linear infinite; }
            .wave3 { animation: waveMove 24s linear infinite; }

            @keyframes waveMove {
              from { transform: translateX(0); }
              to { transform: translateX(-1200px); }
            }
          `}
        </style>

        <g className="wave1">
          <path
            d="M0,38 C120,70 250,10 390,36 C520,60 650,18 780,40 C910,62 1040,20 1200,34 L1200,0 L0,0 Z"
            className="fill-orange-300"
          />
          <path
            d="M1200,38 C1320,70 1450,10 1590,36 C1720,60 1850,18 1980,40 C2110,62 2240,20 2400,34 L2400,0 L1200,0 Z"
            className="fill-orange-300"
          />
        </g>

        <g className="wave2">
          <path
            d="M0,55 C110,82 250,28 390,54 C520,78 650,30 790,56 C930,82 1070,38 1200,52 L1200,0 L0,0 Z"
            className="fill-orange-100"
          />
          <path
            d="M1200,55 C1310,82 1450,28 1590,54 C1720,78 1850,30 1990,56 C2130,82 2270,38 2400,52 L2400,0 L1200,0 Z"
            className="fill-orange-100"
          />
        </g>

        <g className="wave3">
          <path
            d="M0,74 C130,102 250,44 390,70 C530,96 670,50 810,74 C950,98 1080,58 1200,72 L1200,0 L0,0 Z"
            className="fill-white"
          />
          <path
            d="M1200,74 C1330,102 1450,44 1590,70 C1730,96 1870,50 2010,74 C2150,98 2280,58 2400,72 L2400,0 L1200,0 Z"
            className="fill-white"
          />
        </g>
      </svg>
    </div>
  );
}
