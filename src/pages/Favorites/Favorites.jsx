import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/catalog/selectors';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import css from './Favorites.module.css';

export default function Favorites() {
  const { favorites } = useSelector(selectFavorites);
  return (
   <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

        <p className={css.title}>Your favorite cars</p>
        {favorites.length > 0 ? (
        <AdvertsList cars={favorites} />
      ) : (
        <>
        <p className={css.text}>You do not have favorite cars.</p>
        <p className={css.text}>You can add cars to your favorites in Catalog.</p>
        </>
      )}

    </>
  );
}