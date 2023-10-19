import { Navigation } from '../Navigation/Navigation';

import css from './SideBar.module.css';

export const SideBar = () => {
 

  return (
    <div className={css.sidebar}>
      <Navigation />
    </div>
  );
};