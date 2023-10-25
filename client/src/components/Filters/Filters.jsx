import React from 'react'
import { useEffect, useState } from 'react'
import { clearOrder, getAllTypes, orderByAttack,orderByName, filterByCreation,filterByType } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../Filters/Filters.module.css"



const Filters = () => {


    const [filters, setFilters ] =  useState({
        type: "all",
        source: "all",
        nameSort: "",
        attackSort: "",
    })
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTypes())
    }, [dispatch])

    const types = useSelector(state => state.types);

    const changeHandlerFilter = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setFilters({
            ...filters,
            [property]: value,
        });

        if (property === "type"){
            dispatch(filterByType, value)
        }

        if (property === "Created"){
            dispatch(filterByCreation, value)
        }

    }

    const changleHandlerNameSort = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setFilters({
            ...filters,
            [property]: value,
            nameSort: ""
        });

        dispatch(orderByName(value))
    }

    const changleHandlerAttackSort = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        setFilters({
            ...filters,
            [property]: value,
            attackSort: ""
        });

        dispatch(orderByAttack(value))
    }


    const resetFilters = ()=>{
        setFilters({
            type: "all",
            source: "all",
            nameSort: "",
            attackSort: "",
        });
        dispatch(clearOrder())
    }

  return (
    <div className={styles.mainContainer}>

        <div>
            <label>Filter by Types</label>
            <select id='types' name='type' value={filters.type} onChange={changeHandlerFilter}>
                <option value="all" name="all">All</option>
                    {
                        types?.map((type, index) => (
                            <option key={index} name={type.name} value={type.name}>{type.name}</option>
                        ))
                    }
            </select>
        </div>

        <div>
            <label>Filter by Creation</label>
            <select id="source" name="Created" value={filters.source} onChange={changeHandlerFilter} >
                <option name="all" value="all">All</option>
                <option name="dbPokemons" value="dbPokemons" >Pokemons from Data Base</option>
                <option name="apiPokemons"value="apiPokemons">Pokemons from API</option>
            </select>
        </div>

        <div>
            <label>Sort by Name</label>
            <select id='nameSort' name='nameSort' value={filters.nameSort} onChange={changleHandlerNameSort}>
            <option value="" hidden>Select a sort type</option>
            <option name="Ascending" value="Ascending">A - Z</option>
            <option name="Descending" value="Descending">Z - A</option>
            </select>
        </div>

        <div>
            <label>Sort by Attack</label>
            <select id='nameSort' name='nameSort' value={filters.nameSort} onChange={changleHandlerAttackSort}>
                <option value="" hidden>Select a sort type</option>
                <option name="Ascending" value="Ascending">More attack</option>
                <option name="Descending" value="Descending">Less attack</option>


            </select>
        </div>
            <button onClick={resetFilters}>Reset filters</button>
    </div>
  )
}

export default Filters