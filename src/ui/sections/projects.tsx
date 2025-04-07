import { AnimatedComponent } from '../../animations/animations';
import { RouterAnimation } from '../../animations/router-animation';
import { Cards } from '../../components/custom/cards/cards';
import { ProjectCards } from '../../components/custom/cards/projectCards';

export const Projects = () => {
  return (
    <RouterAnimation className="bg-background-p3">
      <div className="flex h-full w-full items-center justify-center">
        {/* wrapper div */}
        <div className="flex h-[70%] w-[70%] flex-wrap items-start justify-center gap-10">
          {/* First card with animation */}
          <AnimatedComponent
            type="flip-vertical"
            delay={0.3}
            duration={0.8}
            animateWhenInView={true}
            className="size-[400px]"
          >
            <Cards size="600">
              <ProjectCards />
            </Cards>
          </AnimatedComponent>
        </div>
      </div>
    </RouterAnimation>
  );
};
