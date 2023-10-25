import styles from './searchbar.module.css'

const SearchBar = ({searchGame}) =>{
    const onSearch = (g) =>{
        searchGame(g.target.value)
    }

    return(
        <div>
            <form className={styles.searchFormContainer} onChange={onSearch}>
                <input className={styles.searchText} type="text" value={searchGame} placeholder="Buscar título"/>
                <label className={styles.searchInputContainer}>
                <input type="submit" className={`${styles.button}`} value="🔍︎" />
                
                </label>
            </form>
        </div>
    );
}

export default SearchBar;