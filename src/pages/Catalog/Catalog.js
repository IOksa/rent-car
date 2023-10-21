import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redux/catalog/operations';
import { selectIsLoading } from 'redux/catalog/selectors';
import {CircleSpinner} from 'components/Spinner/CircleSpinner';
import Container from 'components/Container/Container';
import AdvertsList from 'components/AdvertsList/AdvertsList';
// import { ButtonModalAddContact } from 'components/ButtonModalAddContact/ButtonModalAddContact';
// import Filter from 'components/Filter/Filter';
import css from './Catalog.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Catalog() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);



  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      {isLoading ? (<CircleSpinner/>)
      :(<AdvertsList />)
      }
      
    </>
  );
}