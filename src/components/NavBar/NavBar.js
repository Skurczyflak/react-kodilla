import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.icon} href="/">
        <span className="fa fa-tasks" />
      </a>
      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/favorite">Favorite</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
