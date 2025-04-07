import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AboutMe } from '../sections/about-me';
import { TechStack } from '../sections/tech-stack';
import { Projects } from '../sections/projects';
import { Timeline } from '../sections/timeline';
import { BtnBgShadow } from '../../components/custom/buttons/btn-bg-shadow';
import { FaInfoCircle } from 'react-icons/fa';
import { GrAppsRounded, GrContactInfo, GrTechnology } from 'react-icons/gr';
import { FaTimeline } from 'react-icons/fa6';
import { ContactMe } from '../sections/contact';

interface SectionsItemsProps {
  indicator_style?: 'square' | 'square_rounded' | 'circle';
}

export const SectionsItems = ({
  indicator_style = 'square_rounded',
}: SectionsItemsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  // Define all sections in an array for easy navigation
  const sections = [
    {
      id: 'about',
      component: <AboutMe />,
      name: 'About',
      img: <FaInfoCircle className="text-[18px]" />,
      btn_color: 'bg-button-yellow',
      text_color: 'text-foreground',
    },
    {
      id: 'tech',
      component: <TechStack />,
      name: 'Tech Stack',
      img: <GrTechnology className="text-[18px]" />,
      btn_color: 'bg-button-blue',
      text_color: 'text-background',
    },
    {
      id: 'projects',
      component: <Projects />,
      name: 'Projects',
      img: <GrAppsRounded className="text-[18px]" />,
      btn_color: 'bg-button-green',
      text_color: 'text-foreground',
    },
    {
      id: 'timeline',
      component: <Timeline />,
      name: 'Timeline',
      img: <FaTimeline className="text-[18px]" />,
      btn_color: 'bg-button-red',
      text_color: 'text-background',
    },
    {
      id: 'contact',
      component: <ContactMe />,
      name: 'Contact',
      img: <GrContactInfo className="text-[18px]" />,
      btn_color: 'bg-button-purple',
      text_color: 'text-background',
    },
  ];

  const borderRadiusStyles = {
    square: 'rounded-none',
    square_rounded: 'rounded-[4px]',
    circle: 'rounded-full',
  };

  const BtnBgShadowRadius = {
    square: '0',
    square_rounded: '4',
    circle: '100',
  };

  // Navigate to previous section
  const goToPrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Navigate to next section
  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Handle keyboard navigation - using UP/DOWN keys to navigate LEFT/RIGHT
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPrevSection();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Scroll to the current section when it changes
  useEffect(() => {
    if (containerRef.current) {
      const sectionElements = containerRef.current.children;
      if (sectionElements[currentSection]) {
        sectionElements[currentSection].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }, [currentSection]);

  return (
    <div className="relative flex-1 overflow-hidden">
      {/* Left/Right Navigation buttons */}
      <div className="fixed top-1/2 left-6 flex min-w-[70px] flex-col items-center justify-center">
        <button
          onClick={goToPrevSection}
          className={`bg-accent-background text-accent-foreground border-border z-20 rounded-full border-3 p-2 shadow-md ${currentSection === 0 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
          disabled={currentSection === 0}
          style={
            currentSection === 0
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          <ArrowLeft size={24} />
        </button>

        <span
          className="text-sm font-semibold text-gray-600"
          style={
            currentSection === 0
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          {currentSection > 0 ? sections[currentSection - 1].name : ''}
        </span>
      </div>

      <div className="fixed top-1/2 right-6 flex min-w-[70px] flex-col items-center justify-center">
        <button
          onClick={goToNextSection}
          className={`bg-accent-background text-accent-foreground border-border z-20 cursor-pointer rounded-full border-3 p-2 shadow-md ${currentSection === sections.length - 1 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
          style={
            currentSection === sections.length - 1
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          <ArrowRight size={24} />
        </button>
        <span
          className="text-sm font-semibold text-gray-600"
          style={
            currentSection === sections.length - 1
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          {currentSection < sections.length - 1
            ? sections[currentSection + 1].name
            : ''}
        </span>
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 items-center justify-center gap-5">
        {sections.map((section, index) => (
          <div className="relative flex">
            <BtnBgShadow borderRadius={BtnBgShadowRadius[indicator_style]} />
            <button
              key={section.id}
              onClick={() => setCurrentSection(index)}
              className={`border-border flex cursor-pointer items-center justify-center gap-1 font-bold transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] ${borderRadiusStyles[indicator_style]} relative border-2 ${index === currentSection ? `${section.btn_color} ${section.text_color} translate-x-[1.5px] translate-y-[1.5px] px-4 py-1 hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:translate-x-[1.5px] active:translate-y-[1.5px]` : 'bg-card-background p-[2px]'}`}
              aria-label={`Go to ${section.id} section`}
            >
              {index === currentSection ? (
                <>
                  {section.img} {section.name}
                </>
              ) : (
                section.img
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Horizontal sections container */}
      <div
        ref={containerRef}
        className="scrollbar-hide flex h-full snap-x snap-mandatory overflow-x-scroll"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className="h-full w-full flex-shrink-0 snap-start"
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};
