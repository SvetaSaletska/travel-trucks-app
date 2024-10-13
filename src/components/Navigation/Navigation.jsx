import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <a href="/" className={css.navigation_logo}>
          <span className={css.logo_part}>Travel</span>Trucks
        </a>
      </div>
      <nav className={css.navigation}>
        <NavLink className={css.home_link} to="/">
          Home
        </NavLink>
        <NavLink className={css.catalog_link} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};
