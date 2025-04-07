import { BtnBgShadow } from './btn-bg-shadow';

interface ButtonProps {
  btn_color?: 'green' | 'yellow' | 'blue' | 'purple' | 'red';
  btn_style?: 'square' | 'square_rounded' | 'circle';
  btn_type?: 'button' | 'submit' | 'reset';
  placeholder: string;
  className?: string;
  icon_comp?: React.ReactNode;
  orientation?: 'ImageText' | 'TextImage';
  onClick?: () => void;
}

export const Button = ({
  btn_color = 'purple',
  btn_style = 'square_rounded',
  btn_type = 'button',
  placeholder,
  className = '',
  icon_comp,
  orientation = 'ImageText',
  onClick,
}: ButtonProps) => {
  // Map button styles to the appropriate Tailwind classes
  const bgColors = {
    green: 'bg-button-green hover:bg-button-green-hovered',
    yellow: 'bg-button-yellow hover:bg-button-yellow-hovered',
    blue: 'bg-button-blue hover:bg-button-blue-hovered',
    purple: 'bg-button-purple hover:bg-button-purple-hovered',
    red: 'bg-button-red hover:bg-button-red-hovered',
  };
  const borderRadiusStyles = {
    square: 'rounded-none',
    square_rounded: 'rounded-[4px]',
    circle: 'rounded-full',
  };

  // Determine text color based on button style
  const textColor =
    btn_color === 'blue' || btn_color === 'purple' || btn_color === 'red'
      ? 'text-yellow-300'
      : 'text-foreground';

  // Map button style to appropriate border radius for BgShadow
  const BtnBgShadowRadius = {
    square: '0',
    square_rounded: '4',
    circle: '100',
  };

  return (
    <div className="relative">
      <BtnBgShadow borderRadius={BtnBgShadowRadius[btn_style]} />
      <button
        onClick={onClick}
        type={btn_type}
        className={`${bgColors[btn_color]} ${borderRadiusStyles[btn_style]} relative z-10 flex w-full cursor-pointer items-center gap-1 border-3 border-gray-900 px-4 py-1 font-bold transition-all outline-none hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1.5px] active:translate-y-[1.5px] ${textColor} ${className}`}
      >
        {orientation === 'TextImage' ? (
          <>
            {placeholder}
            {icon_comp}
          </>
        ) : (
          <>
            {icon_comp}
            {placeholder}
          </>
        )}
      </button>
    </div>
  );
};
