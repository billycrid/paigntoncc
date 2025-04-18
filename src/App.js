import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Layout } from './layout/Layout.tsx';
import { NavigationConfig } from './pages/navigation.config.tsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageTracker } from './PageTracker.tsx';

function App() {
  return (
    <Router>
      <PageTracker />
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
