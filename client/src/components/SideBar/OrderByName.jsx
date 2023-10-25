import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByNameAsc, orderByNameDesc } from '../../redux/actions/actions.js'
import styles from './sidebar.module.css'

const OrderByName = () => {
    const dispatch = useDispatch()

    function handleOrderByName(e) {
        if (e.target.value === "asc") {
            dispatch(orderByNameAsc())
        } else {
            dispatch(orderByNameDesc())
        }
    }

    return (
        <div className={styles.subContainer}>
            <select className={styles.selects} onChange={(e) => handleOrderByName(e)}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    )
}




export { OrderByName }