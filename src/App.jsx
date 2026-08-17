// src/App.jsx — route definitions for vite-react-ssg (data-router format).
// The `handle.title` on each route drives the per-page <title> (see Layout).
import Layout from './components/Layout.jsx';
import Home from './pages/Home/index.jsx';
import Academy from './pages/Academy.jsx';
import Tenis from './pages/Tenis.jsx';
import Futbol from './pages/Futbol.jsx';
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
      { index: true, element: <Home />, handle: { title: 'SAR — Academia Deportiva Internacional · Pádel, Tenis y Fútbol en España' } },
      { path: 'padel', element: <Academy />, handle: { title: 'Pádel — Academia y Escuela Residencial · SAR' } },
      { path: 'tenis', element: <Tenis />, handle: { title: 'Tenis — El Sistema Español de Formación · SAR' } },
      { path: 'futbol', element: <Futbol />, handle: { title: 'Fútbol — En Alianza con Prime Play · SAR' } },
      { path: 'campamentos', element: <Camps />, handle: { title: 'Campamentos — Verano y Semana Santa · SAR' } },
      { path: 'metodo', element: <Method />, handle: { title: 'El Método — Deportivo, Académico y de Carácter · SAR' } },
      { path: 'campus', element: <Facilities />, handle: { title: 'El Campus — Instalaciones y Residencia · SAR' } },
      { path: 'contacto', element: <Inquire />, handle: { title: 'Contacto — SAR' } },
      { path: 'privacy', element: <Privacy />, handle: { title: 'Aviso de Privacidad — SAR' } },
    ],
  },
];
