import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Layout } from './layout/Layout.tsx';
import { NavigationConfig } from './pages/navigation.config.tsx';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-138423710-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {NavigationConfig.map((nav, index) => {
            return <Route key={`route_${index}`} exact path={nav.route} element={nav.component}/>
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
