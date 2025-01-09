import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { PhonesPage } from './components/PhonesPage/PhonesPage';

export const Root = () => (
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            path="phones"
            element={<PhonesPage />}
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
