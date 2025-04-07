import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  Variants,
} from 'framer-motion';

// Animation types
export type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'pop-up'
  | 'scale'
  | 'rotate'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'card-flip';

// Props for the AnimatedComponent
interface AnimatedComponentProps {
  children: React.ReactNode;
  type: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
  animateWhenInView?: boolean;
  exitAnimation?: boolean;
  customVariants?: Variants;
  staggerChildren?: boolean;
  staggerDelay?: number;
  width?: string | number;
  height?: string | number;
  // Specific for card flip
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  isFlipped?: boolean;
  onAnimationComplete?: () => void;
  onFlip?: () => void;
  style?: React.CSSProperties;
}

// Props for AnimatedItem
interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  type?: AnimationType;
  customVariants?: Variants;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

// Props for AnimatedCardFlip
interface AnimatedCardFlipProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped?: boolean;
  duration?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  onFlip?: () => void;
  style?: React.CSSProperties;
}

// Variants for different animation types
const animationVariants: Record<AnimationType, Variants> = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-down': {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  'pop-up': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
  },
  'flip-horizontal': {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  'flip-vertical': {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  'card-flip': {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  },
};

// Main animation component
export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  type,
  duration = 0.5,
  delay = 0,
  className = '',
  animateWhenInView = false,
  exitAnimation = false,
  customVariants,
  staggerChildren = false,
  staggerDelay = 0.05,
  width = 'fit-content',
  height = 'auto',
  frontContent,
  backContent,
  isFlipped = false,
  onAnimationComplete,
  style,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if ((animateWhenInView && isInView) || !animateWhenInView) {
      controls.start('visible');
    }
  }, [animateWhenInView, isInView, controls]);

  // Use type assertion to ensure variants is recognized as Variants type
  const variants: Variants = customVariants || animationVariants[type];

  // If it's a card flip, use a different component structure
  if (type === 'card-flip') {
    return (
      <div
        className={className}
        style={{
          ...style,
          width,
          height,
          perspective: '1000px',
          position: 'relative',
        }}
        ref={ref}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: `transform ${duration}s ease`,
          }}
          initial={false}
          animate={isFlipped ? 'back' : 'front'}
          variants={variants}
          onAnimationComplete={onAnimationComplete}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            {frontContent}
          </div>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {backContent}
          </div>
        </motion.div>
      </div>
    );
  }

  if (exitAnimation) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={className}
          ref={ref}
          className={className}
          style={{
            ...style,
            width,
            height,
            position: 'relative',
            
          }}
          variants={variants}
          initial="hidden"
          animate={animateWhenInView ? controls : 'visible'}
          exit="hidden"
          transition={{
            duration,
            delay,
            staggerChildren: staggerChildren ? staggerDelay : 0,
            delayChildren: delay,
          }}
          onAnimationComplete={onAnimationComplete}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        width,
        height,
        position: 'relative',
        
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animateWhenInView ? controls : 'visible'}
        transition={{
          duration,
          delay,
          staggerChildren: staggerChildren ? staggerDelay : 0,
          delayChildren: delay,
        }}
        style={{ width: '100%', height: '100%' }}
        onAnimationComplete={onAnimationComplete}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Child animation components - for staggered animations
export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
  type = 'fade-in',
  customVariants,
  delay = 0,
  duration = 0.3,
  style,
}) => {
  // Use type assertion to ensure variants is recognized as Variants type
  const variants: Variants =
    customVariants || (type ? animationVariants[type] : {});

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Card flip specific component
export const AnimatedCardFlip: React.FC<AnimatedCardFlipProps> = ({
  frontContent,
  backContent,
  isFlipped = false,
  duration = 0.5,
  width = '100%',
  height = '100%',
  className = '',
  onFlip,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        width,
        height,
        perspective: '1000px',
      }}
      onClick={() => onFlip && onFlip()}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {frontContent}
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </div>
  );
};
