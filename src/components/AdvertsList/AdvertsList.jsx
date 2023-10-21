import AdvertsListItem from '../AdvertsListItem/AdvertsListItem';
import css from './AdvertsList.module.css';
import { useSelector } from 'react-redux';
import {selectAdvertsState, selectFilterState} from '../../redux/catalog/selectors';

const AdvertsList = ()=>{

    const stateAdverts=useSelector(selectAdvertsState);
    // const stateFilter=useSelector(selectFilterState);

    // const getVisibleAdverts = () => {
    //   const normalizedFilter = stateFilter.toLowerCase();

    //   return stateAdverts.filter(advert =>
    //     advert.name.toLowerCase().includes(normalizedFilter)).sort((firstadvert, secondadvert)=>firstadvert.name.localeCompare(secondadvert.name));
   
    // };
  
   //const visibleAdverts = getVisibleAdverts();


    return (
        // <div className={css.advertListWrap}>
            <ul className={css.advertList}>
                {stateAdverts.map(advert=>(
                    <li key={advert.id} className={css.advertListItem}>
                        <AdvertsListItem advert={advert}/>
                    </li>
                
                ))}
            </ul>
        // </div>
    )
};

export default AdvertsList;
 