import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Layout } from './layout/Layout.tsx';
import { NavigationConfig } from './pages/navigation.config.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PageTracker } from './PageTracker.tsx';
import { useSyncGoogleConsent } from './hooks/useSyncGoogleConsent.ts';
import { Privacy } from './pages/Privacy/Privacy.tsx';

function App() {
  useSyncGoogleConsent();
  return (
    <Router>
      <PageTracker />
      <Layout>
        <Routes>
          {NavigationConfig.map((nav, index) => {
            return <Route key={`route_${index}`} path={nav.route} element={nav.component}/>
          })}
          <Route key={`route_privacy`} path={'/privacy'} element={<Privacy />}/>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
