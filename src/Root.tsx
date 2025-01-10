import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { NotFoundPage } from './components/NotFoundPage';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

export const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
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
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
