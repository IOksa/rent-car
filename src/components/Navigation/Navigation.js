import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import css from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color:#ffffff;

  &.active {
    color: #e84a5f;
  }
`;

export const Navigation = () => {
  
  return (
    <nav>
      <ul className={css.menuList}>
      <li>
        <StyledLink className={css.link} to="/">
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink className={css.link} to="/catalog">
          Catalog
        </StyledLink>
      </li>
      <li>
        <StyledLink className={css.link} to="/favorites">
          Favorites
        </StyledLink>
      </li>
      </ul>
    </nav>
  );
};