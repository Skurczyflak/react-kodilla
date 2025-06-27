import styles from './Favorite.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);
  console.log(favoriteCards);
  if(favoriteCards.length === 0) return <h2 className={styles.title}>No cards...</h2>
  return (
    <Container>
      <PageTitle>FAVORITE</PageTitle>
      <ul className={styles.list}>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Favorite;
