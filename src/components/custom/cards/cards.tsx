import { BtnBgShadow } from '../buttons/btn-bg-shadow';

interface CardsProps {
  card_style?: 'square' | 'square_rounded' | 'circle';
  children?: React.ReactNode;
  className?: string;
  isPinned?: boolean;
  size?: string;
}

export const Cards = ({
  card_style = 'square_rounded',

  children,
  className,
  isPinned = false,
  size = '400',
}: CardsProps) => {
  // Map button styles to the appropriate Tailwind classes
  const borderRadiusStyles = {
    square: 'rounded-none',
    square_rounded: 'rounded-[4px]',
    circle: 'rounded-full ',
  };
  const borderWidthStyles = {
    square: 'border-4',
    square_rounded: 'border-[3px]',
    circle: 'border-2 ',
  };

  const shadowBorderRadius = {
    square: '0',
    square_rounded: '4',
    circle: '100',
  };

  return (
    <div className={`relative size-[${size}px]`}>
      <BtnBgShadow
        translate="2"
        borderRadius={shadowBorderRadius[card_style]}
      />
      <div
        className={`${className} ${borderRadiusStyles[card_style]} ${borderWidthStyles[card_style]} bg-background-p1 relative z-10 size-full border-gray-900 font-bold transition-all outline-none hover:-translate-x-[4px] hover:-translate-y-[4px] ${isPinned ? 'hover:translate-x-[2px] hover:translate-y-[2px] translate-x-[2px] translate-y-[2px]' : '-translate-x-[3px] -translate-y-[3px]'}`}
      >
        {children}
      </div>
    </div>
  );
};
