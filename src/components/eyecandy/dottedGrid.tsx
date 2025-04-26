interface DottedPatternProps {
  rows: number;
  columns: number;
  highlightStartRow?: number;
  highlightStartCol?: number;
  highlightRows?: number;
  highlightCols?: number;
  dotColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  dotSize?: number;
  spacing?: number;
  className?: string;
}

export const DottedPattern = ({
  rows,
  columns,
  highlightStartRow = 0,
  highlightStartCol = 0,
  highlightRows = 0,
  highlightCols = 0,
  dotColor = '#000',
  backgroundColor = '#f8f8f8',
  highlightColor = '#4CC9D1',
  dotSize = 4,
  spacing = 20,
  className,
}: DottedPatternProps) => {
  // Calculate dimensions
  const width = columns * spacing;
  const height = rows * spacing;

  // Generate dots
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      // Determine if this dot is in the highlighted area
      const isHighlighted =
        r >= highlightStartRow &&
        r < highlightStartRow + highlightRows &&
        c >= highlightStartCol &&
        c < highlightStartCol + highlightCols;

      dots.push(
        <g key={`dot-${r}-${c}`}>
          {/* Background rectangle for the cell */}
          <rect
            x={c * spacing - spacing / 2}
            y={r * spacing - spacing / 2}
            width={spacing}
            height={spacing}
            fill={isHighlighted ? highlightColor : backgroundColor}
          />
          {/* The dot */}
          <circle
            cx={c * spacing}
            cy={r * spacing}
            r={dotSize / 2}
            fill={dotColor}
          />
        </g>
      );
    }
  }

  return (
    <div className={`dotted-pattern-container ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`-${spacing / 2} -${spacing / 2} ${width + spacing} ${height + spacing}`}
      >
        {dots}
      </svg>
    </div>
  );
};
