interface ShapeProps {
    width?: string | number;
    height?: string | number;
    borderWidth?: number;
    borderColor?: string;
    fillColor?: string;
    shape?: 'square' | 'rectangle' | 'semicircle' | 'circle' | 'triangle';
    className?: string;
  }
  
  export const Shape = ({
    width = 100,
    height = 100,
    borderWidth = 2,
    borderColor = 'black',
    fillColor = 'transparent',
    shape = 'square',
    className,
  }: ShapeProps) => {
    // Convert width and height to numbers for calculations
    const w = typeof width === 'string' ? parseInt(width) : width;
    const h = typeof height === 'string' ? parseInt(height) : height;
    
    // SVG viewBox dimensions
    const viewBoxWidth = w;
    const viewBoxHeight = h;
    
    // Style for the container
    const containerStyle = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    };
  
    // Render the appropriate shape based on the shape prop
    const renderShape = () => {
      switch (shape) {
        case 'square':
          // A square with equal width and height
          const squareSize = Math.min(viewBoxWidth, viewBoxHeight);
          return (
            <rect
              x={(viewBoxWidth - squareSize) / 2 + borderWidth / 2}
              y={(viewBoxHeight - squareSize) / 2 + borderWidth / 2}
              width={squareSize - borderWidth}
              height={squareSize - borderWidth}
              stroke={borderColor}
              strokeWidth={borderWidth}
              fill={fillColor}
            />
          );
        
        case 'rectangle':
          // A rectangle that can have different width and height
          return (
            <rect
              x={borderWidth / 2}
              y={borderWidth / 2}
              width={viewBoxWidth - borderWidth}
              height={viewBoxHeight - borderWidth}
              stroke={borderColor}
              strokeWidth={borderWidth}
              fill={fillColor}
            />
          );
        
        case 'circle':
          const radius = Math.min(viewBoxWidth, viewBoxHeight) / 2 - borderWidth / 2;
          return (
            <circle
              cx={viewBoxWidth / 2}
              cy={viewBoxHeight / 2}
              r={radius}
              stroke={borderColor}
              strokeWidth={borderWidth}
              fill={fillColor}
            />
          );
        
        case 'semicircle':
          // Semicircle with diameter border
          const semiRadius = Math.min(viewBoxWidth, viewBoxHeight) / 2 - borderWidth / 2;
          const centerX = viewBoxWidth / 2;
          const centerY = viewBoxHeight / 2;
          
          return (
            <path
              d={`M ${centerX - semiRadius} ${centerY} 
                  A ${semiRadius} ${semiRadius} 0 0 0 ${centerX + semiRadius} ${centerY}
                  L ${centerX - semiRadius} ${centerY}
                  Z`}
              stroke={borderColor}
              strokeWidth={borderWidth}
              fill={fillColor}
            />
          );
        
        case 'triangle':
          // Create an equilateral triangle
          return (
            <polygon
              points={`${viewBoxWidth / 2},${borderWidth} 
                      ${borderWidth},${viewBoxHeight - borderWidth} 
                      ${viewBoxWidth - borderWidth},${viewBoxHeight - borderWidth}`}
              stroke={borderColor}
              strokeWidth={borderWidth}
              fill={fillColor}
            />
          );
        
        default:
          return null;
      }
    };
  
    return (
      <div style={containerStyle} className={className}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {renderShape()}
        </svg>
      </div>
    );
  };