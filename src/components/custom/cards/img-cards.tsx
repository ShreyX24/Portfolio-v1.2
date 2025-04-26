import { Star15 } from '../../eyecandy/start15';
import { BtnBgShadow } from '../buttons/btn-bg-shadow';

interface ImgCardsProps {
  card_style?: 'square' | 'square_rounded' | 'circle';
}

export const ImgCards = ({ card_style = 'square_rounded' }: ImgCardsProps) => {
  // Map button styles to the appropriate Tailwind classes
  const borderRadiusStyles = {
    square: 'rounded-none',
    square_rounded: 'rounded-[14px]',
    circle: 'rounded-full ',
  };
  const borderWidthStyles = {
    square: 'border-4',
    square_rounded: 'border-4',
    circle: 'border-2 ',
  };

  const shadowBorderRadius = {
    square: '0',
    square_rounded: '14',
    circle: '100',
  };

  return (
    <div className="relative flex h-[450px] w-[400px]">
      <BtnBgShadow
        borderRadius={shadowBorderRadius[card_style]}
        translate="4"
      />
      <Star15
        color="#7e39bb"
        strokeWidth={8}
        stroke="black"
        width={100}
        className="absolute -top-10 -left-5 z-20"
      />
      <div
        className={`${borderRadiusStyles[card_style]} ${borderRadiusStyles[card_style]} ${borderWidthStyles[card_style]} bg-background-p1 relative z-10 flex size-full flex-col items-start gap-1 border-gray-900 p-4 font-bold transition-all outline-none`}
      >
        <div
          className={`${borderRadiusStyles[card_style]} ${borderWidthStyles[card_style]} h-[90%] w-full border-gray-900 outline-none`}
        >
          <img
            src="/images/shrey.jpg"
            alt="Profile"
            className={`relative h-full w-full rounded-[6px] object-cover`}
          />{' '}
        </div>

        <div className="relative flex h-[20%] w-full items-start justify-between py-2">
          <span className="">@dreadeye</span>
          <div className="flex items-baseline gap-2">
            <img src="/icons/heart.png" alt="" width={18} />
            <img src="/icons/comment.svg" alt="" width={18} />
            <img src="/icons/share.svg" alt="" width={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* */
}
