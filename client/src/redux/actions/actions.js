import axios from "axios"
import {
    GET_ALL_GENRES,
    GET_PLATFORMS,
    POST_GAMES,
    GET_ALL_GAMES,
    GET_GAME_DETAIL,
    GET_GAMES_NAME,
    GET_GAMES_BY_GENRE,
    GET_GAMES_BY_PLATFORM, 
    FILTER_BY_CREATED, 
    ORDER_BY_NAME_ASC, 
    ORDER_BY_NAME_DESC,
    ORDER_BY_RATING_ASC,
    ORDER_BY_RATING_DESC, 
    FILTER_BY_PLATFORM, 
    FILTER_BY_GENRE,
    SEARCH_BY_NAME
} from "./actionsType";

const searchByName = (payload) => {
    return {
        type: SEARCH_BY_NAME,
        payload
    }
}

const getAllGames = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("/videogames")
            return dispatch({
                type: GET_ALL_GAMES,
                payload:data 
            })
        } catch (error) {
            
        }
    }
}

const getGameDetail = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/videogame/${id}`)
            return dispatch({
                type: GET_GAME_DETAIL,
                payload:data 
            })
        } catch (error) {
            
        }
    }
}

const getGamesName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/videogames?name=${name}`)
            return dispatch({
                type: GET_GAMES_NAME,
                payload:data 
            })
        } catch (error) {
            
        }
    }
}

const getGamesByGenre = (genre) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/videogames?genre=${genre}`)
            return dispatch({
                type: GET_GAMES_BY_GENRE,
                payload:data 
            })
        } catch (error) {
            
        }
    }
}

const getGamesByPlatform = (platform) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`/videogames?platform=${platform}`)
            return dispatch({
                type: GET_GAMES_BY_PLATFORM,
                payload:data 
            })
        } catch (error) {
            
        }
    }
}



const getAllGenres = () =>{
        return async (dispatch)=>{
            try {
                const apiData = await axios ("/genre")
                const genre = apiData.data
                dispatch({
                    type: GET_ALL_GENRES,
                    payload: genre
                })
            } catch (error) {}
           
        }
}

const getPlatforms = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("/platforms")
            return dispatch({
                type: GET_PLATFORMS,
                payload:data 
            })
        } catch (error) {
            console.log(error)   
        }
    }
}


const filterCreated = (payload) => {
    return {
        type: FILTER_BY_CREATED, //ToDo
        payload
    }
}

const orderByNameAsc = (payload) => {
    return {
        type: ORDER_BY_NAME_ASC,
        payload
    }
}

const orderByNameDesc = (payload) => {
    return {
        type: ORDER_BY_NAME_DESC,
        payload
    }
}

const orderByRatingAsc = (payload) => {
    return {
        type: ORDER_BY_RATING_ASC,
        payload
    }
}

const orderByRatingDesc = (payload) => {
    return {
        type: ORDER_BY_RATING_DESC,
        payload
    }
}

const filterByPlatform = (payload) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: FILTER_BY_PLATFORM,
                payload
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

const filterByGenre = (payload) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: FILTER_BY_GENRE,
                payload
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}


const postGame = (form) =>{
    return async (dispatch) => {
        try {
            await axios.post("/videogames", form)
            return dispatch({
                type: POST_GAMES,
            })
        } catch (error) {
            return console.log(error)
        }
    }
}

export { searchByName, getAllGenres, getPlatforms, postGame, getAllGames, getGameDetail, getGamesName, getGamesByGenre, getGamesByPlatform, filterCreated, orderByNameAsc, orderByNameDesc, orderByRatingAsc, orderByRatingDesc, filterByPlatform, filterByGenre}