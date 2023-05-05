import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { ContactUs } from './ContactUs';
import { Events } from './Events';
import { Leaderboard } from './Leaderboard';
import { Projects } from './Projects';
import { AboutUs } from './AboutUs';
import { PageNotFound } from './PageNotFound';

interface IRoute {
  title: string;
  path: string;
  element: JSX.Element;
}

const allRoutes: IRoute[] = [
  { title: 'Home', path: '', element: <Home /> },
  { title: 'About Us', path: 'about-us', element: <AboutUs /> },
  { title: 'Contact Us', path: 'contact-us', element: <ContactUs /> },
  { title: 'Events', path: 'events', element: <Events /> },
  { title: 'Leaderboard', path: 'leaderboard', element: <Leaderboard /> },
  { title: 'Projects', path: 'projects', element: <Projects /> },
  { title: '404', path: '*', element: <PageNotFound /> },
];

export function AllRoutes() {
  return (
    <Routes>
      {allRoutes.map(({ title, path, element }) => (
        <Route key={title} path={path} element={element} />
      ))}
    </Routes>
  );
}
