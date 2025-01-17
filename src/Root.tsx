import { StrictMode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { Category } from './types/Category';

export const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<App />}
            >
              <Route
                index
                element={<HomePage />}
              />
              <Route
                path="home"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
              <Route path="phones">
                <Route
                  index
                  element={<PhonesPage />}
                />
                <Route
                  path=":productId"
                  element={<ProductDetailsPage type={Category.phones} />}
                />
              </Route>
              <Route path="tablets">
                <Route
                  index
                  element={<TabletsPage />}
                />
                <Route
                  path=":productId"
                  element={<ProductDetailsPage type={Category.tablets} />}
                />
              </Route>
              <Route path="accessories">
                <Route
                  index
                  element={<AccessoriesPage />}
                />
                <Route
                  path=":productId"
                  element={<ProductDetailsPage type={Category.accessories} />}
                />
              </Route>
              <Route
                path="favorites"
                element={<FavoritesPage />}
              />
              <Route
                path="cart"
                element={<CartPage />}
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
