import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FaInfoCircle } from 'react-icons/fa';
import { GrAppsRounded, GrContactInfo, GrTechnology } from 'react-icons/gr';
import { FaTimeline } from 'react-icons/fa6';
import { BtnBgShadow } from '../components/custom/buttons/btn-bg-shadow';
import { AnimatePresence } from 'framer-motion';

interface RootProps {
  indicator_style?: 'square' | 'square_rounded' | 'circle';
}

export const Root = ({ indicator_style = 'square_rounded' }: RootProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define all sections with their routing information
  const sections = [
    {
      id: 'about',
      path: '/about',
      name: 'About',
      img: <FaInfoCircle className="text-[18px]" />,
      btn_color: 'bg-button-red',
      text_color: 'text-background',
    },
    {
      id: 'tech',
      path: '/tech',
      name: 'Tech-Stack',
      img: <GrTechnology className="text-[18px]" />,
      btn_color: 'bg-button-yellow',
      text_color: 'text-foreground',
    },
    {
      id: 'projects',
      path: '/projects',
      name: 'Projects',
      img: <GrAppsRounded className="text-[18px]" />,
      btn_color: 'bg-button-purple',
      text_color: 'text-background',
    },
    {
      id: 'timeline',
      path: '/timeline',
      name: 'Timeline',
      img: <FaTimeline className="text-[18px]" />,
      btn_color: 'bg-button-blue',
      text_color: 'text-background',
    },
    {
      id: 'contact',
      path: '/contact',
      name: 'Contact',
      img: <GrContactInfo className="text-[18px]" />,
      btn_color: 'bg-button-green',
      text_color: 'text-foreground',
    },
  ];

  // Determine current section index based on location
  const getCurrentSectionIndex = () => {
    const path = location.pathname;

    // Default to About section if on root path
    if (path === '/') {
      return 0;
    }

    const index = sections.findIndex((section) => section.path === path);
    return index !== -1 ? index : 0; // Default to first section if not found
  };

  const currentSectionIndex = getCurrentSectionIndex();

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
    if (currentSectionIndex > 0) {
      navigate(sections[currentSectionIndex - 1].path);
    }
  };

  // Navigate to next section
  const goToNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      navigate(sections[currentSectionIndex + 1].path);
    }
  };

  // Handle keyboard navigation
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
  }, [location.pathname]);

  // Redirect to /about if on root path
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/about', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="relative flex-1 overflow-hidden">
      {/* Left/Right Navigation buttons */}
      <div className="fixed top-1/2 left-6 z-20 flex min-w-[70px] flex-col items-center justify-center">
        <button
          onClick={goToPrevSection}
          className={`bg-accent-background text-accent-foreground border-border rounded-full border-3 p-2 shadow-md ${currentSectionIndex === 0 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
          disabled={currentSectionIndex === 0}
          style={
            currentSectionIndex === 0
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          <ArrowLeft size={24} />
        </button>

        <span
          className="text-sm font-semibold text-gray-600"
          style={
            currentSectionIndex === 0
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          {currentSectionIndex > 0
            ? sections[currentSectionIndex - 1].name
            : ''}
        </span>
      </div>

      <div className="fixed top-1/2 right-6 z-20 flex min-w-[70px] flex-col items-center justify-center">
        <button
          onClick={goToNextSection}
          className={`bg-accent-background text-accent-foreground border-border z-20 cursor-pointer rounded-full border-3 p-2 shadow-md ${currentSectionIndex === sections.length - 1 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
          style={
            currentSectionIndex === sections.length - 1
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          <ArrowRight size={24} />
        </button>
        <span
          className="text-sm font-semibold text-gray-600"
          style={
            currentSectionIndex === sections.length - 1
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
        >
          {currentSectionIndex < sections.length - 1
            ? sections[currentSectionIndex + 1].name
            : ''}
        </span>
      </div>

      {/* Section indicator/navigation */}
      <div className="fixed bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 items-center justify-center gap-5">
        {sections.map((section, index) => (
          <div key={section.id} className="relative flex">
            <BtnBgShadow borderRadius={BtnBgShadowRadius[indicator_style]} />
            <Link
              to={section.path}
              className={`border-border flex cursor-pointer items-center justify-center gap-[6px] font-bold transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] ${borderRadiusStyles[indicator_style]} relative border-2 ${index === currentSectionIndex ? `${section.btn_color} ${section.text_color} translate-x-[1.5px] translate-y-[1.5px] px-4 py-1 hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:translate-x-[1.5px] active:translate-y-[1.5px]` : 'bg-card-background p-[2px]'}`}
              aria-label={`Go to ${section.id} section`}
            >
              {index === currentSectionIndex ? (
                <>
                  {section.img}
                  <span className="font-mono font-extrabold uppercase text-shadow-xs/20">
                    {section.name}
                  </span>
                </>
              ) : (
                section.img
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Content area using React Router's Outlet */}
      <div className="relative h-screen w-screen">
        <AnimatePresence initial={false}>
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
};
