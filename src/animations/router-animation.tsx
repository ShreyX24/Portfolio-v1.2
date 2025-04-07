import { motion } from 'framer-motion';

interface RouterAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export const RouterAnimation = ({
  children,
  className,
}: RouterAnimationProps) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className={` ${className} absolute top-0 left-0 flex h-screen w-screen items-center justify-center`}
    >
      {children}
    </motion.div>
  );
};
