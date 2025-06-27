import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.icon} to="/">
        <span className="fa fa-tasks" />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to="/favorite"
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
