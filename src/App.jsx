// src/App.jsx — route definitions for vite-react-ssg (data-router format).
// The `handle.title` on each route drives the per-page <title> (see Layout).
import Layout from './components/Layout.jsx';
import Home from './pages/Home/index.jsx';
import Academy from './pages/Academy.jsx';
import Camps from './pages/Camps.jsx';
import Method from './pages/Method.jsx';
import Facilities from './pages/Facilities.jsx';
import Inquire from './pages/Inquire.jsx';
import Privacy from './pages/Privacy.jsx';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, handle: { title: 'The Padel Bridge — Residential Padel Academy & International School' } },
      { path: 'academy', element: <Academy />, handle: { title: 'The Academy — Full-Year Residential Padel & School · The Padel Bridge' } },
      { path: 'camps', element: <Camps />, handle: { title: 'Camps & Trials — Summer and Seasonal Padel · The Padel Bridge' } },
      { path: 'method', element: <Method />, handle: { title: 'The Method — Athletic, Academic & Character · The Padel Bridge' } },
      { path: 'facilities', element: <Facilities />, handle: { title: 'The Campus — Courts, Sports Science & Residence · The Padel Bridge' } },
      { path: 'inquire', element: <Inquire />, handle: { title: 'Enquire — The Padel Bridge' } },
      { path: 'privacy', element: <Privacy />, handle: { title: 'Privacy Notice — The Padel Bridge' } },
    ],
  },
];
