import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { deleteCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const onToggleFavorite = (id) => {
    dispatch(toggleCardFavorite(id));
  };

  const onDelete = (id) => {
    dispatch(deleteCard(id));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <span>
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
      <button onClick={() => onDelete(props.id)}  className={styles.delete + ' fa fa-trash'}></button>
        </span>
    </li>
  );
};

export default Card;
