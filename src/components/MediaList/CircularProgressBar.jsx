const CircularProgressBar = ({
  percent = 90,
  size = 3,
  strokeWidth = 0.25,
  fontSize = 1.2,
  strokeColor = 'green'
}) => {
  const radius = size / 2 - strokeWidth;
  const perimeter = 2 * Math.PI * radius;
  const strokeDashoffset = perimeter - (percent / 100) * perimeter;
  // const viewBox = `-${size/2}vw -${size/2}vw ${size}vw ${size}vw`

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
        />
        <circle
          r={`${radius}vw`}
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          fill="none"
          // 2 * PI * R = 2 * 3,14 * 20 = 125.65
          strokeDasharray={`${perimeter}vw`}
          // 125.65 - (percent / 100) * 125.65
          strokeDashoffset={`${strokeDashoffset}vw`}
          transform="rotate(-90)"
          style={{transformOrigin: 'center'}}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize={`${fontSize}vw`}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
