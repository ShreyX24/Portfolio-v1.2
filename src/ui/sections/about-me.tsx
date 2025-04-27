import { RouterAnimation } from '../../animations/router-animation';
import { BtnBgShadow } from '../../components/custom/buttons/btn-bg-shadow';
import { ImgCards } from '../../components/custom/cards/img-cards';
import { Typewriter } from '../../components/custom/typewriter';
import { FlyingAirplane } from '../../components/eyecandy/airplane';
import { GridPattern } from '../../components/eyecandy/dottedGrid';
import { Shape } from '../../components/eyecandy/shape';
import { Star8 } from '../../components/eyecandy/start8';

export const AboutMe = () => {
  return (
    <RouterAnimation className="bg-background">
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-start">
      <FlyingAirplane />
        {/* eyecandy stars */}
        <Star8
          color="#c5d86d"
          strokeWidth={8}
          stroke="black"
          width={65}
          className="absolute top-50 right-200 z-20 rotate-35"
        />
        <Star8
          color="#9cf6f6"
          strokeWidth={8}
          stroke="black"
          width={65}
          className="absolute top-120 right-190 z-20 rotate-65"
        />

        <GridPattern
          type="lines"
          rows={4}
          columns={4}
          highlightStartCol={1}
          highlightStartRow={1}
          highlightCols={2}
          highlightRows={2}
          backgroundColor="transparent"
          className="absolute bottom-70 left-140"
        />

        <Shape
          shape="semicircle"
          fillColor="#5c95ff"
          borderWidth={0}
          className="absolute bottom-45 left-250 z-10 -rotate-50"
        />
        <Shape
          shape="square"
          fillColor="#fb4b4e"
          borderWidth={0}
          width={150}
          className="absolute bottom-50 left-260"
        />
        <Shape
          shape="rectangle"
          width={150}
          className="absolute bottom-35 left-285"
        />

        <div className="relative flex flex-col items-center justify-center gap-5">
          {/* eyecandy */}
          {/* dotted grid no highlight, top left of profile picture */}
          <GridPattern
            type="dots"
            rows={20}
            columns={20}
            backgroundColor="transparent"
            className="absolute -top-40 -left-40"
          />
          <>
            {/* blue highlight */}
            <GridPattern
              type="dots"
              highlightColor="#006ee9"
              highlightStartRow={0}
              highlightStartCol={6}
              highlightRows={5}
              highlightCols={12}
              rows={14}
              columns={14}
              backgroundColor="transparent"
              className="absolute -right-30 -bottom-40"
            />

            {/* yellow highlight */}
            <GridPattern
              type="dots"
              highlightStartRow={6}
              highlightStartCol={0}
              highlightRows={3}
              highlightCols={4}
              highlightColor="#ffbf00"
              rows={14}
              columns={14}
              backgroundColor="transparent"
              className="absolute -right-30 -bottom-40"
            />

            {/* purple highlight */}
            <GridPattern
              type="dots"
              highlightStartRow={9}
              highlightStartCol={9}
              highlightRows={5}
              highlightCols={4}
              highlightColor="#8b3ecf"
              rows={14}
              columns={14}
              backgroundColor="transparent"
              className="absolute -right-30 -bottom-40"
            />

            {/* red highlight */}
            <GridPattern
              type="dots"
              highlightStartRow={11}
              highlightStartCol={2}
              highlightRows={1}
              highlightCols={5}
              highlightColor="#c1121f"
              rows={14}
              columns={14}
              backgroundColor="transparent"
              className="absolute -right-30 -bottom-40"
            />
          </>

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
                  {/* intro */}
                  <span className="font-main flex items-center gap-1 select-none">
                    👋 Hey there, my name is{' '}
                    <div className="relative flex">
                      <BtnBgShadow
                        className="z-20 rotate-2 transform"
                        translate="4"
                      />
                      <Star8
                        color="#c71f37"
                        strokeWidth={5}
                        stroke="black"
                        width={120}
                        className="absolute -top-20 left-20 z-10 rotate-35"
                      />
                      <strong className="text-background bg-header-purple font-archivo relative z-30 rotate-2 transform rounded-[3px] px-2 pt-[6px] text-xl">
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
