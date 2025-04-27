interface GridPatternProps {
  rows: number;
  columns: number;
  highlightStartRow?: number;
  highlightStartCol?: number;
  highlightRows?: number;
  highlightCols?: number;
  dotColor?: string;
  lineColor?: string;
  backgroundColor?: string;
  highlightColor?: string;
  dotSize?: number;
  lineWidth?: number;
  spacing?: number;
  className?: string;
  type: 'dots' | 'lines';
}

export const GridPattern = ({
  rows,
  columns,
  highlightStartRow = 0,
  highlightStartCol = 0,
  highlightRows = 0,
  highlightCols = 0,
  dotColor = '#000',
  lineColor = '#000',
  backgroundColor = '#f8f8f8',
  highlightColor = '#f5a623', // Changed to match the amber color in your example
  dotSize = 4,
  lineWidth = 2,
  spacing = 20,
  className,
  type = 'dots',
}: GridPatternProps) => {
  // Calculate dimensions
  const width = columns * spacing;
  const height = rows * spacing;

  // Generate grid elements based on type
  const renderGrid = () => {
    if (type === 'dots') {
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
      return dots;
    } else {
      // Generate lines (internal grid only)
      const lines = [];
      
      // Create cell backgrounds first - for highlighting
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          // Determine if this cell is in the highlighted area
          const isHighlighted =
            r >= highlightStartRow &&
            r < highlightStartRow + highlightRows &&
            c >= highlightStartCol &&
            c < highlightStartCol + highlightCols;

          if (isHighlighted) {
            lines.push(
              <rect
                key={`cell-${r}-${c}`}
                x={c * spacing}
                y={r * spacing}
                width={spacing}
                height={spacing}
                fill={highlightColor}
              />
            );
          }
        }
      }
      
      // Internal horizontal lines only (no outer borders)
      for (let r = 1; r < rows; r++) {
        lines.push(
          <line
            key={`h-line-${r}`}
            x1={0}
            y1={r * spacing}
            x2={width}
            y2={r * spacing}
            stroke={lineColor}
            strokeWidth={lineWidth}
          />
        );
      }
      
      // Internal vertical lines only (no outer borders)
      for (let c = 1; c < columns; c++) {
        lines.push(
          <line
            key={`v-line-${c}`}
            x1={c * spacing}
            y1={0}
            x2={c * spacing}
            y2={height}
            stroke={lineColor}
            strokeWidth={lineWidth}
          />
        );
      }
      
      return lines;
    }
  };

  return (
    <div className={`grid-pattern-container ${className || ''}`}>
      <svg
        width={width}
        height={height}
        viewBox={type === 'dots' 
          ? `-${spacing / 2} -${spacing / 2} ${width + spacing} ${height + spacing}`
          : `0 0 ${width} ${height}`}
      >
        {renderGrid()}
      </svg>
    </div>
  );
};