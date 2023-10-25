import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByRatingAsc, orderByRatingDesc } from '../../redux/actions/actions.js'
import styles from './sidebar.module.css'

const OrderByRating = () => {
    const dispatch = useDispatch()

    function handleOrderByRating(e) {
        if (e.target.value === "asc") {
            dispatch(orderByRatingAsc())
        } else {
            dispatch(orderByRatingDesc())
        }
    }

    return (
        <div className={styles.subContainer}>
            <select className={styles.selects} onChange={(e) => handleOrderByRating(e)}>
                <option value="asc">Menor a Mayor</option>
                <option value="desc">Mayor a Menor</option>
            </select>
        </div>
    )
}




export { OrderByRating}