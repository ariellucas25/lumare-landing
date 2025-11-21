import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const App: React.FC = () => {
  // Simple hash-based routing state
  const [route, setRoute] = useState<string>(window.location.hash || RoutePath.HOME);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || RoutePath.HOME);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load if hash is empty
    if (!window.location.hash) {
      window.location.hash = RoutePath.HOME;
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case RoutePath.TERMS:
        return <Terms />;
      case RoutePath.PRIVACY:
        return <Privacy />;
      case RoutePath.HOME:
      default:
        return <Landing />;
    }
  };

  return (
    <Layout currentRoute={route}>
      {renderPage()}
    </Layout>
  );
};

export default App;