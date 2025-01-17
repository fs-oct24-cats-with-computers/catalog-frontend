import { StrictMode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { FavoritesPage } from './pages/FavoritesPage';
import { CartPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import { PhonePage } from './pages/PhonePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
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
                  element={<ProductsPage type={Category.phones} />}
                />
                {/* replace with <PhonePage /> component after implement it */}
                <Route
                  path=":phoneId"
                  element={<PhonePage />}
                />
              </Route>
              <Route path="tablets">
                <Route
                  index
                  element={<ProductsPage type={Category.tablets} />}
                />
                {/* replace with <TabletPage /> component after implement it*/}
                <Route
                  path=":tabletId"
                  element={<div>Tablet Page</div>}
                />
              </Route>
              <Route path="accessories">
                <Route
                  index
                  element={<ProductsPage type={Category.accessories} />}
                />
                {/* replace with <AccessoryPage /> component after implement it*/}
                <Route
                  path=":accessoryId"
                  element={<div>Accessory Page</div>}
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
