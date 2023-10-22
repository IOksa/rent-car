import AdvertsListItem from '../AdvertsListItem/AdvertsListItem';
import css from './AdvertsList.module.css';

const AdvertsList = ({cars})=>{

    return (
       
            <ul className={css.advertList}>
                {cars.map(advert=>(
                    <li key={advert.id} className={css.advertListItem}>
                        <AdvertsListItem advert={advert}/>
                    </li>
                
                ))}
            </ul>
       
    )
};

export default AdvertsList;
 