import { Navigation } from '../Navigation/Navigation';
import imageLogo from '../../assets/images/logo.png';

import css from './SideBar.module.css';

export const SideBar = () => {
 

  return (
    <aside className={css.sidebar}>
      <img src={imageLogo} alt="Logo" width="100%"/>
      <Navigation />
    </aside>
  );
};