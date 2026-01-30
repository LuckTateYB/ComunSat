interface WaveSeparatorProps {
  variant?: "top" | "bottom";
  color?: "primary" | "background" | "muted";
  className?: string;
}

const WaveSeparator = ({ variant = "bottom", color = "background", className = "" }: WaveSeparatorProps) => {
  const colorMap = {
    primary: "fill-[#0B2C6B]",
    background: "fill-[#F8F9FA]",
    muted: "fill-[#ffffff]",
  };

  if (variant === "top") {
    return (
      <div className={`w-full overflow-hidden leading-0 ${className}`}>
        <svg
          className={`w-full h-12 sm:h-16 lg:h-24 ${colorMap[color]}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-0 rotate-180 ${className}`}>
      <svg
        className={`w-full h-12 sm:h-16 lg:h-24 ${colorMap[color]}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  );
};

export default WaveSeparator;
