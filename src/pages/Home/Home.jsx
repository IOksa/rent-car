import css from './Home.module.css';
import imageHome from '../../assets/images/stylish-elegant-woman-car-salon.jpg';
  
  export default function Home() {
    return (
      <div className={css.wrapper}>
        <div>
          <p className={css.text}>Connecting you to the biggest brands in car rental</p>
          <p className={css.text}>Flexible rentals. Cancel or change most bookings for free up to 48 hours before pick-up</p>
          <p className={css.text}>No hidden fees. Know exactly what you’re paying</p>
          <p className={css.text}>Price Match Guarantee. Found the same deal for less? We’ll match the price.</p>
          <p className={css.text}>Clean cars. Socially distant rental counters.We’re working with our partners to keep you safe and in the driving seat.</p>
        </div>
        <div className={css.imageWrapper}>
          <img src={imageHome} alt="Rent a car" width="500px"/>
        </div>
       </div>
      
    );
  }