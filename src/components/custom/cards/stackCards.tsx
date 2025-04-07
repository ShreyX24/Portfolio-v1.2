import { TbPin } from 'react-icons/tb';
import { Button } from '../buttons/button';
import { useEffect, useState } from 'react';
import { StackType } from '../../../lib/stacks';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedItem } from '../../../animations/animations';
import { RiUnpinLine } from 'react-icons/ri';

interface StackCardsProps {
  stack: StackType[];
  card_header: string;
  icon_comp: React.ReactNode;
  onPinChange?: (isPinned: boolean) => void;
  allPinned: boolean;
}

export const StackCards = ({
  stack,
  card_header,
  icon_comp,
  onPinChange,
  allPinned,
}: StackCardsProps) => {
  const [divHovered, setDivHovered] = useState<boolean>(false);
  const [pinClicked, setPinClicked] = useState<boolean>(false);

  const handleHoveredOn = () => {
    if (!pinClicked) {
      setDivHovered(true);
    }
  };

  const handleHoveredOff = () => {
    if (!pinClicked) {
      setDivHovered(false);
    }
  };

  const handlePinClick = () => {
    const newPinState = !pinClicked;
    setPinClicked(newPinState);

    // Notify parent component about pin state change
    if (onPinChange) {
      onPinChange(newPinState);
    }

    // If unpinning, and mouse is not over the card, hide content
    if (!newPinState && !divHovered) {
      setDivHovered(false);
    } else if (newPinState) {
      // If pinning, always show content
      setDivHovered(true);
    }
  };

  useEffect(() => {
    setPinClicked(allPinned);
  }, [allPinned]);

  const showContent = divHovered || pinClicked;

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      onMouseEnter={handleHoveredOn}
      onMouseLeave={handleHoveredOff}
    >
      <AnimatePresence mode="wait">
        {showContent ? (
          <motion.div
            key="content"
            className="h-full w-full"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* top div */}
            <div className="flex h-[70px] w-full items-center justify-between border-b-2 border-black px-4">
              {/* card header */}
              <span className="-rotate-2 transform bg-lime-300 p-2 px-4 text-lg font-black">
                {card_header}
              </span>
              {/* pin button */}
              <div className="px-4">
                <Button
                  btn_color="green"
                  placeholder=""
                  icon_comp={
                    pinClicked ? (
                      <RiUnpinLine className="size-5" />
                    ) : (
                      <TbPin className="size-5" />
                    )
                  }
                  onClick={handlePinClick}
                  className={
                    pinClicked ? 'translate-x-[2px] translate-y-[2px]' : ''
                  }
                />
              </div>
            </div>
            {/* bottom div */}
            <div className="relative h-[calc(100%-70px)] w-full overflow-auto">
              <div className="flex flex-wrap items-center gap-6 p-4">
                {stack.map((item, index) => (
                  <AnimatedItem
                    key={index}
                    type="pop-up"
                    delay={index * 0.05}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src={`/icons/${item.img}.png`}
                      width={38}
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="header"
            className="flex h-full flex-col items-start justify-center gap-2 p-8"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {icon_comp}
            <span className="font-main h-full w-[70px] text-4xl text-wrap break-words uppercase text-shadow-sm/20">
              {card_header}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
