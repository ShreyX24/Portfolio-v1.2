import { RouterAnimation } from '../../animations/router-animation';
import { BtnBgShadow } from '../../components/custom/buttons/btn-bg-shadow';
import { ImgCards } from '../../components/custom/cards/img-cards';
import { Typewriter } from '../../components/custom/typewriter';
import { DottedPattern } from '../../components/eyecandy/dottedGrid';

export const AboutMe = () => {
  return (
    <RouterAnimation className="bg-background">
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-start">
        <div className="relative flex flex-col items-center justify-center gap-5">
          {/* eyecandy */}
          <DottedPattern
            rows={16}
            columns={16}
            backgroundColor="transparent"
            
            className="absolute -right-30 -bottom-30"
          />
          {/* wrapper */}
          <div className="flex h-full w-full items-center justify-center gap-10">
            {/* profile picture */}
            <div className="flex h-full items-center justify-start">
              <ImgCards />
            </div>

            {/* About section */}
            <div className="flex h-full items-center justify-center">
              <div className="font-main text-secondary flex w-full flex-col items-start justify-center gap-6 text-2xl">
                <div className="relative flex flex-col">
                  {/* eyecandy */}
                  {/* <DottedPattern
                    rows={16}
                    columns={16}
                    backgroundColor="transparent"
                    className="absolute -right-10 -bottom-30"
                  /> */}
                  {/* intro */}
                  <span className="font-main flex items-center gap-1">
                    👋 Hey there, my name is{' '}
                    <div className="relative flex">
                      <BtnBgShadow
                        className="rotate-2 transform"
                        translate="4"
                      />
                      <strong className="text-background bg-header-purple font-archivo relative rotate-2 transform rounded-[3px] px-2 pt-[6px] text-xl">
                        Shreyansh
                      </strong>
                    </div>
                    .
                  </span>

                  {/* what i do */}
                  <span className="text-foreground font-archivo w-[750px] text-start text-8xl font-[900]">
                    I LOVE SMOOTH & ATTRACTIVE UI DESIGNS.
                  </span>
                </div>

                {/* oocupation */}
                {/* <span className="flex gap-2 text-lg">
                  I'm a Validation Engineer @{' '}
                  <img src="/icons/intel.png" alt="" width={32} />
                </span> */}

                {/* type writer */}
                <div className="font-pacifico text-secondary flex h-[50px] w-[850px] justify-center px-1 text-start font-extralight md:justify-start md:text-[32px]">
                  <Typewriter
                    dataType={[
                      "I'm from a small town called Sambalpur located in Odisha, Bharat...",
                      'Please feel free to browse through my portfolio...',
                      'Hope you have a good day 😊.',
                    ]}
                    dataPeriod={2000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouterAnimation>
  );
};
