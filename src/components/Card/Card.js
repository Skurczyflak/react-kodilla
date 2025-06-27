import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const onToggleFavorite = (id) => {
    dispatch(toggleCardFavorite(id));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={() => onToggleFavorite(props.id)}
        className={
          (props.isFavorite ? 'fa fa-star' : 'fa fa-star-o') +
          ' ' +
          styles.star +
          ' ' +
          styles.starColor
        }
      ></button>
    </li>
  );
};

export default Card;
