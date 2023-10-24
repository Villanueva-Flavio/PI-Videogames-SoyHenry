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
    ORDER_BY_NAME,
    ORDER_BY_RATING
} from "./actionsType";

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

const orderByRating = (payload) => {
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
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

export { getAllGenres, getPlatforms, postGame, getAllGames, getGameDetail, getGamesName, getGamesByGenre, getGamesByPlatform, orderByRating, orderByName }