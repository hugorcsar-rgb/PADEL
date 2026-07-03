import { Outlet, useLocation, useMatches } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

const DEFAULT_TITLE = 'The Padel Bridge — Academy & School';

function useDocumentTitle() {
  const matches = useMatches();
  useEffect(() => {
    const active = [...matches].reverse().find((m) => m.handle && m.handle.title);
    if (typeof document !== 'undefined') {
      document.title = active ? active.handle.title : DEFAULT_TITLE;
    }
  }, [matches]);
}

function useScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash && typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  useDocumentTitle();
  useScrollToTop();
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
