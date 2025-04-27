import { useEffect, useRef, useState } from 'react';

// Airplane component that stays within screen boundaries
export const FlyingAirplane = () => {
  const airplaneRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const [speed, setSpeed] = useState(3);
  
  // Instead of using state for dimensions, use a constant since we won't change it
  const planeDimensions = { width: 40, height: 20 };

  useEffect(() => {
    // Get initial window dimensions
    const updateDimensions = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
    
    let windowDimensions = updateDimensions();
    let animationFrameId: number | undefined = undefined;
    let lastChangeTime = Date.now();

    // Handle window resize
    const handleResize = () => {
      windowDimensions = updateDimensions();
    };

    window.addEventListener('resize', handleResize);

    const updatePosition = () => {
      const now = Date.now();
      
      // Change direction randomly every 4-5 seconds
      if (now - lastChangeTime > (Math.random() * 3000 + 4000)) {
        setDirection({
          x: Math.random() * 2 - 1, // Between -1 and 1
          y: Math.random() * 2 - 1  // Between -1 and 1
        });
        setSpeed(Math.random() * 3 + 3); // Random speed between 4 and 5
        lastChangeTime = now;
      }

      setPosition((prev) => {
        // Calculate new position
        let newX = prev.x + direction.x * speed;
        let newY = prev.y + direction.y * speed;
        
        // Keep the plane inside screen boundaries with padding
        const padding = 10; // Padding from screen edges
        
        // Right boundary - account for plane width
        if (newX > windowDimensions.width - planeDimensions.width - padding) {
          newX = windowDimensions.width - planeDimensions.width - padding;
          setDirection(prev => ({ ...prev, x: -Math.abs(prev.x) })); // Force left direction
        }
        
        // Left boundary
        if (newX < padding) {
          newX = padding;
          setDirection(prev => ({ ...prev, x: Math.abs(prev.x) })); // Force right direction
        }
        
        // Bottom boundary - account for plane height
        if (newY > windowDimensions.height - planeDimensions.height - padding) {
          newY = windowDimensions.height - planeDimensions.height - padding;
          setDirection(prev => ({ ...prev, y: -Math.abs(prev.y) })); // Force upward direction
        }
        
        // Top boundary
        if (newY < padding) {
          newY = padding;
          setDirection(prev => ({ ...prev, y: Math.abs(prev.y) })); // Force downward direction
        }
        
        // Calculate rotation based on direction
        const angle = Math.atan2(direction.y, direction.x) * (180 / Math.PI);
        setRotation(angle);
        
        return { x: newX, y: newY };
      });
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction, speed]);
  
  return (
    <div 
      ref={airplaneRef}
      className="absolute z-50 pointer-events-none"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        transition: 'transform 0.05s linear'
      }}
    >
      {/* Simple rocket-like airplane shape */}
      <svg width={planeDimensions.width} height={planeDimensions.height} viewBox="0 0 40 20">
        <path 
          d="M35 10L5 0L15 10L5 20L35 10Z" 
          fill="#ff5252" 
          stroke="#333" 
          strokeWidth="1.5"
        />
        <path 
          d="M35 10L28 7V13L35 10Z" 
          fill="#555" 
          stroke="#333" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};