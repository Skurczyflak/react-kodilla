import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import shortid from 'shortid';
import { data } from '../../db/data';	
import { useState } from 'react';

const List = () => {

const [columns, setColumns] = useState(data);

const addCard = (newCard, columnId) => {
	const columnsUpdated = columns.map(column => {
		if(column.id === columnId)
			return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
		else
			return column
	})

	setColumns(columnsUpdated);

};

const addColumn = newColumn => {
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [], addCard: addCard }]);
};



    return (
      <div className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do <span>soon</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
          {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} addCard={addCard} />)}
        </section>
        <ColumnForm handleSubmit={addColumn} />
      </div>
    );
  };

  export default List;