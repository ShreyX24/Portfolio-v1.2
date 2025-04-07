import { useState } from 'react';
import { Cards } from '../../components/custom/cards/cards';
import { StackCards } from '../../components/custom/cards/stackCards';
import {
  backStack,
  dailyStack,
  dbStack,
  frontStack,
  miscStack,
  toolStack,
} from '../../lib/stacks';
import { CgDatabase, CgWebsite } from 'react-icons/cg';
import { FaCodeBranch } from 'react-icons/fa';
import { AnimatedComponent } from '../../animations/animations';
import { IoToday } from 'react-icons/io5';
import { RiToolsFill } from 'react-icons/ri';
import { BsMotherboardFill } from 'react-icons/bs';
import { RouterAnimation } from '../../animations/router-animation';
import { Checkbox } from '../../components/custom/checkbox/checkbox';

export const TechStack = () => {
  const [frontEndPinned, setFrontEndPinned] = useState(false);
  const [backEndPinned, setBackEndPinned] = useState(false);
  const [dbPinned, setDbPinned] = useState(false);
  const [miscPinned, setMiscPinned] = useState(false);
  const [toolPinned, setToolPinned] = useState(false);
  const [dailyPinned, setDailyPinned] = useState(false);
  const [allPinned, setAllPinned] = useState(false);

  return (
    <RouterAnimation className="bg-background-p2">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          {/* Unpin all */}
          <div className="flex w-[70%] items-center justify-start gap-2 py-8">
            <Checkbox setChecked={setAllPinned} />
            <span className="text-sm font-bold">
              {allPinned ? <>Unpin All</> : <>Pin All</>}
            </span>
          </div>

          {/* stack wrapper div */}
          <div className="flex h-[70%] w-[70%] flex-wrap items-start gap-10">
            {/* First card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.1}
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={dailyPinned} size="400">
                <StackCards
                  allPinned={allPinned}
                  stack={dailyStack}
                  card_header="Current & Daily"
                  icon_comp={<IoToday className="size-10" />}
                  onPinChange={setDailyPinned}
                />
              </Cards>
            </AnimatedComponent>

            {/* Second card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.2}
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={frontEndPinned}>
                <StackCards
                  allPinned={allPinned}
                  stack={frontStack}
                  card_header="Frontend"
                  icon_comp={<CgWebsite className="size-10" />}
                  onPinChange={setFrontEndPinned}
                />
              </Cards>
            </AnimatedComponent>

            {/* Third card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.3} // Staggered delay for second card
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={backEndPinned}>
                <StackCards
                  allPinned={allPinned}
                  stack={backStack}
                  card_header="Backend"
                  icon_comp={<FaCodeBranch className="size-10" />}
                  onPinChange={setBackEndPinned}
                />
              </Cards>
            </AnimatedComponent>

            {/* Fourth card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.5} // Staggered delay for third card
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={dbPinned}>
                <StackCards
                  allPinned={allPinned}
                  stack={dbStack}
                  card_header="Database"
                  icon_comp={<CgDatabase className="size-10" />}
                  onPinChange={setDbPinned}
                />
              </Cards>
            </AnimatedComponent>

            {/* Fifth card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.6}
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={toolPinned}>
                <StackCards
                  allPinned={allPinned}
                  stack={toolStack}
                  card_header="Tools"
                  icon_comp={<RiToolsFill className="size-10" />}
                  onPinChange={setToolPinned}
                />
              </Cards>
            </AnimatedComponent>

            {/* Sixth card with animation */}
            <AnimatedComponent
              type="slide-up"
              delay={0.7}
              duration={0.5}
              animateWhenInView={true}
              className="size-[400px]"
            >
              <Cards isPinned={miscPinned}>
                <StackCards
                  allPinned={allPinned}
                  stack={miscStack}
                  card_header="Others"
                  icon_comp={<BsMotherboardFill className="size-10" />}
                  onPinChange={setMiscPinned}
                />
              </Cards>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </RouterAnimation>
  );
};

{
  /*  */
}
