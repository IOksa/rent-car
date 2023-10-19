import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import CircularWithValueLabel from 'components/Spinner/Progress';
import css from './App.module.css';

const HomePage = lazy(() => import('pages/Home'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites'));


const App=()=>{
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
      <>
      <div className={css.progressWrap}>
        <b className={css.text}>Refreshing...</b>
        <br/>
        <CircularWithValueLabel/>
      </div>
      </>
      ) : (
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

