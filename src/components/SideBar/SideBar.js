import { Navigation } from '../Navigation/Navigation';

import css from './SideBar.module.css';

export const SideBar = () => {
 

  return (
    <aside className={css.sidebar}>
      <Navigation />
    </aside>
  );
};