import React from 'react'
import {OrderByName} from './OrderByName.jsx'
import {OrderByRating} from './OrderByRating.jsx'
import {FilterByPlatform, FilterByGenre, FilterCreated} from './Filters.jsx'

import styles from './sidebar.module.css';

const SideBar = () => {
    return (
        <div className={styles.container}>
                <div className={styles.subContainer}>
                    <FilterCreated></FilterCreated>
                </div>
                <div className={styles.subContainer}>
                    <OrderByName></OrderByName>
                </div>
                <div className={styles.subContainer}>
                    <OrderByRating></OrderByRating>
                </div>
                <div className={styles.subContainer}>
                    <FilterByPlatform></FilterByPlatform>
                </div>
                <div className={styles.subContainer}>
                    <FilterByGenre></FilterByGenre>
                </div>
        </div>
    )
}

export default SideBar