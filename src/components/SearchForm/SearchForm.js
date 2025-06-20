import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
const SearchForm = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(search));
        setSearch('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" />
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
  };

  export default SearchForm;