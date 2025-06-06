import styles from './Column.module.scss';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><sapn className={styles.icon + ' fa fa-' + props.icon}></sapn>{props.title}</h2>
        </article>
    );
  };

  export default Column;