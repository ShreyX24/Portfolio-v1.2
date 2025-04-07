import { BtnBgShadow } from '../buttons/btn-bg-shadow';

interface ImgCardsProps {
  card_style?: 'square' | 'square_rounded' | 'circle';
}

export const ImgCards = ({ card_style = 'square_rounded' }: ImgCardsProps) => {
  // Map button styles to the appropriate Tailwind classes
  const borderRadiusStyles = {
    square: 'rounded-none',
    square_rounded: 'rounded-[4px]',
    circle: 'rounded-full ',
  };
  const borderWidthStyles = {
    square: 'border-4',
    square_rounded: 'border-4',
    circle: 'border-2 ',
  };

  const shadowBorderRadius = {
    square: '0',
    square_rounded: '4',
    circle: '100',
  };

  return (
    <div className="relative w-fit">
      <BtnBgShadow
        borderRadius={shadowBorderRadius[card_style]}
        translate="6"
      />
      <div
        className={`${borderRadiusStyles[card_style]} ${borderRadiusStyles[card_style]} ${borderWidthStyles[card_style]} relative z-10 flex items-center gap-1 border-gray-900 font-bold transition-all outline-none`}
      >
        <img
          src="/images/shrey.jpg"
          alt="Profile"
          className={`relative h-full w-[400px] object-contain`}
        />
      </div>
    </div>
  );
};
