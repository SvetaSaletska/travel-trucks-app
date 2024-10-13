import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img alt="TravelTrucks Logo" className="logo_image" />
      </div>
      <nav>
        <NavLink className={css.link} to="/" exact>
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};
