import styles from './searchbar.module.css'
import { searchByName } from '../../redux/actions/actions'
import {useDispatch} from "react-redux"
import { useState } from 'react'

const SearchBar = () =>{
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const searchHandler = (event)=>{
        setName(event.target.value)
    }
    const onSearch = () =>{
        dispatch(searchByName(name))
    }

    return(
        <div className={styles.searchFormContainer}>

            <input className={styles.searchText} type="text" value={name} onChange={searchHandler} placeholder="Buscar título"/>
            <label className={styles.searchInputContainer}>
            <button type="submit" className={`${styles.button}`} onClick={onSearch} placeholder="🔍︎" />
            
            </label>
        </div>
    );
}

export default SearchBar;