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
