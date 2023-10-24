import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { searchVideogames } from '../store/actions';
import styles from './search.module.css'

export default function SearchBar(){
    let [search, setSearch] = useState('');
    let dispatch = useDispatch();
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchVideogames(search));
        setSearch('')
    }
    /**
     * @param {Event} e
     * @description 
     */
    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value);        
    }
    return(<>
        <form className={styles.searchFormContainer} onSubmit={onSubmit}>
            <input className={styles.searchText} type="text" onChange={onInputChange} value={search} placeholder="...Search by game title"/>
            <label className={styles.searchInputContainer}>
            <input type="submit" className={`${styles.button}`} value="Search" />
            <svg className={styles.searchButtonSvg} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </label>
        </form>
    </>);
}