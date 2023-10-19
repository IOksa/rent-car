import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import("../Layout"));
const HomePage = lazy(() => import('pages/Home'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

const App=()=>{

  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />}/>
          </Route>
        </Routes>
      );
};

export default App;

