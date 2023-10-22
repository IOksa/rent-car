import css from './ButtonClose.module.css';
import iconClose from '../../assets/icons/iconClose.svg';

export const ButtonClose =({onCloseModal})=>{

    return ( 
        <>
        <button type="button" className={css.buttonClose} onClick={onCloseModal}>
            <svg className={css.buttonCloseIcon}>
            <use href={`${iconClose}#icon-x-close`}></use>
            </svg>
        </button>
        </>
        
    )
}

