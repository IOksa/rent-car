import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, fetchFirstPageAdverts } from 'redux/catalog/operations';
import {selectAdvertsState, selectIsLoading, selectError } from 'redux/catalog/selectors';
import {CircleSpinner} from 'components/Spinner/CircleSpinner';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import {lengthData,queryLimit} from '../../constants/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Catalog() {

  const dispatch = useDispatch();
  const stateAdverts=useSelector(selectAdvertsState);
  const isLoading = useSelector(selectIsLoading);
  const [isLoadButton, setIsLoadButton]=useState(true);
  const [countPage, setCountPage]=useState(1);
  const error=useSelector(selectError);

  const maxPage=lengthData/queryLimit;

  useEffect(() => {
    if(countPage===1){
      dispatch(fetchFirstPageAdverts());
    }

    
    if(error){
      const errorMessage="Something went wrong. Reload the page and try again. "+error.toString();
      toast.error(errorMessage);
    }
    
  }, [dispatch, countPage, error]);

  const handleOnClickLoadMore =async ()=>{
      await dispatch(fetchAdverts(countPage+1));   
      setCountPage(prevState => (prevState + 1));
      if(countPage+1>=maxPage){
        setIsLoadButton(false);
        toast.info("We're sorry, but you've reached the end of search results.");
      }
  }

  const shouldRenderLoadButton=stateAdverts!==0 && !isLoading && isLoadButton;

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <ToastContainer autoClose="4000" theme="colored"/>
      {isLoading ? (<CircleSpinner/>)
      :(<AdvertsList cars={stateAdverts}/>)
      }
      {shouldRenderLoadButton && <ButtonLoadMore onClickLoadMore={handleOnClickLoadMore}/>}
      
    </>
  );
}