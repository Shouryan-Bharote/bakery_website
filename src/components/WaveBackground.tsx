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
        viewBox="0 0 2009 1296"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M1836 725.5C2533.3 1389.01 564.5 1016 344.814 1271.23C57.4878 1271.23 16 686.669 16 521.479C16 356.288 72.7739 16 360.1 16C647.426 16 1220.03 1003.17 1836 725.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
