import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const listId = props.listId;

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>
        Title:
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Icon:
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
