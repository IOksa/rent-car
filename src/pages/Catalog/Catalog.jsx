import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchAllAdverts } from 'redux/catalog/operations';
import {selectAdvertsState, selectCountAllAdverts, selectIsLoading, selectError } from 'redux/catalog/selectors';
import {CircleSpinner} from 'components/Spinner/CircleSpinner';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import {queryLimit} from '../../constants/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const stateAdverts=useSelector(selectAdvertsState);
  const isLoading = useSelector(selectIsLoading);
  const [isLoadButton, setIsLoadButton]=useState(true);
  const [countPage, setCountPage]=useState(1);
  const lengthData=useSelector(selectCountAllAdverts);
  const error=useSelector(selectError);

  const maxPage=lengthData/queryLimit;
  console.log("lengthData=", lengthData);
  console.log("queryLimit=", queryLimit);

  useEffect(() => {
    console.log("useEffect Catalog");
    if(countPage===1){
      dispatch(fetchAllAdverts());
    }
    dispatch(fetchAdverts(countPage));
    console.log("countPage=", countPage);
    console.log("maxPage=", maxPage);
    if(countPage>=maxPage){
      setIsLoadButton(false);
      toast.info("We're sorry, but you've reached the end of search results.");
    }
    if(error){
      const errorMessage="Something went wrong. Reload the page and try again. "+error.toString();
      toast.error(errorMessage);
    }
    
  }, [dispatch, countPage, error, maxPage]);

  const handleOnClickLoadMore =()=>{
    setCountPage(prevState => (prevState + 1));

  }

  const shouldRenderLoadButton=stateAdverts!==0 && !isLoading && isLoadButton;

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <ToastContainer autoClose="4000" theme="colored"/>
      {isLoading ? (<CircleSpinner/>)
      :(<AdvertsList />)
      }
      {shouldRenderLoadButton && <ButtonLoadMore onClickLoadMore={handleOnClickLoadMore}/>}
      
    </>
  );
}