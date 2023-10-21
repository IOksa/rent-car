
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { ButtonClose } from 'components/ButtonClose/ButtonClose';
import ModalCarCard from 'components/ModalCarCard/ModalCarCard';
import { addFavorite, removeFavorite } from 'redux/catalog/favoriteSlice';
import { selectFavorite } from 'redux/catalog/selectors';
import { ReactComponent as IconInFavorite } from '../../assets/icons/iconInFavorite.svg';
import { ReactComponent as IconNonFavorite } from '../../assets/icons/iconNonFavorite.svg';
import css from './AdvertsListItem.module.css';

const AdvertsListItem = ({advert}) => {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
      } = advert;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    // const { favoriteCars } = useSelector(selectFavorite);
    const companyAddress = address.split(',');
    const country = companyAddress[2];
    const city = companyAddress[1];
 
    // const dispatch = useDispatch();

    // console.log("favoriteCars=", favoriteCars);

    // useEffect(() => {
    //     if (favoriteCars.some(favCar => favCar.id === advert.id)) {
    //       setIsFavorite(true);
    //     }
    //   }, [favoriteCars, advert]);


    const onOpenModal = () => {
        setIsModalOpen(true);
        window.addEventListener('keydown', onEscKeyPress);
    
    
    };
    
    const onCloseModal = () => {
    setIsModalOpen(false);
    window.removeEventListener('keydown', onEscKeyPress);
    
    };
    
    const onEscKeyPress=(event)=> {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
        if (isEscKey) {
            onCloseModal();
        }
    };

    const handleToFavorite = e => {
        // e.stopPropagation();
        // setIsFavorite(!isFavorite);
    
        // if (favoriteCars.some(favCar => favCar.id === advert.id)) {
        //   dispatch(removeFavorite(advert));
        // } else {
        //   dispatch(addFavorite(advert));
        // }
      };

    return (
        <>
        <div className={css.advertWrap}>
            <div className={css.imageWrap}>
                <div className={css.iconWrap} onClick={handleToFavorite}>
                {isFavorite ? (
                    <IconInFavorite width={20} height={20} />
                ) : (
                    <IconNonFavorite width={20} height={20} />
                )}
                </div>
                <img src={img} alt={model} width="274" height="268" className={css.imageCar}/>
            </div>
            <div className={css.titleWrapper}>
                <p>{make} <span className={css.textAccent}>{model}</span>, {year}</p>               
                <p>{rentalPrice}</p>
            </div>
            <p className={css.info}>
                {city} <span className={css.textSeparator}> | </span>
                {country} <span className={css.textSeparator}> | </span> {rentalCompany}
            </p>
            <p className={css.info}>
                {type} <span className={css.textSeparator}> | </span> {model} <span className={css.textSeparator}> | </span>{' '}
                {id}
                <span className={css.textSeparator}> | </span> {functionalities[0]}
            </p>
            <button
                type="button"
                onClick={onOpenModal}

                className={css.advertListItemButton}
                >
                Learn more
            </button>
        </div>
        {isModalOpen && (
        <Modal onCloseModal={onCloseModal} >
          <ButtonClose onCloseModal={onCloseModal}/>
          <ModalCarCard onCloseModal={onCloseModal} currentId={id} currentAdvert={advert}/>
        </Modal>
        )} 
        
        
        </>
    );                  
};



export default AdvertsListItem;