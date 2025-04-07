import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ErrorPage } from '../pages/error-page';
import { Root } from '../pages/root';
import { AboutMe } from '../ui/sections/about-me';
import { TechStack } from '../ui/sections/tech-stack';
import { Projects } from '../ui/sections/projects';
import { Timeline } from '../ui/sections/timeline';
import { ContactMe } from '../ui/sections/contact';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AboutMe />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'tech',
        element: <TechStack />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'contact',
        element: <ContactMe />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
