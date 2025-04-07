import { RouterAnimation } from '../../animations/router-animation';
import { BtnProfile } from '../../components/custom/buttons/btn-profile';
import { Button } from '../../components/custom/buttons/button';

import { Checkbox } from '../../components/custom/checkbox/checkbox';
import { Input } from '../../components/custom/inputs/input';
export const ContactMe = () => {
  return (
    <RouterAnimation className="bg-background-p5">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        Contact
        <Button
          btn_color="purple"
          placeholder="Test Button"
          btn_style="circle"
        />
        <BtnProfile btn_style="circle" />
        <Input input_style="square_rounded" placeholder="John Doe" />
        <Checkbox />
      </div>
    </RouterAnimation>
  );
};
