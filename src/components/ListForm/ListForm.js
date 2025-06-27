import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDesc('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label>
        Title:
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <TextInput
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ListForm;
