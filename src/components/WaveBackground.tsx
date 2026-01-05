// src/components/WaveBackground.tsx
interface WaveBackgroundProps {
  color?: string;
  className?: string;
}

const WaveBackground = ({
  color = "#41291F",
  className = "",
}: WaveBackgroundProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <svg
        viewBox="0 0 1440 1296"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{ shapeRendering: "geometricPrecision" }}
      >
        <path
          d="M1443 725.5C2140.3 1389.01 171.5 1016 -48.186 1271.23C-335.512 1271.23 -377 686.669 -377 521.479C-377 356.288 -320.226 16 -32.8998 16C254.426 16 827.032 1003.17 1443 725.5Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
