import{
    GET_ALL_GAMES, GET_GAME_DETAIL, GET_GAMES_NAME, GET_GAMES_BY_GENRE, GET_GAMES_BY_PLATFORM, ORDER_BY_NAME, ORDER_BY_RATING, GET_ALL_GENRES, GET_PLATFORMS
} from "./actions/actionsType"

const initialState = {
    allVideogames: [],
    genres: [],
    platforms: [],
    videogames: [],
    videogame: []
};

export default function reducer ( state = initialState, {type, payload}){
    switch(type){
        
        case GET_ALL_GAMES:{
            return{
                ...state,
                allVideogames: payload,
                videogames: payload
            }
        }

        case GET_GAME_DETAIL:{
            return{
                ...state,
                videogame: payload
            }
        }

        case GET_GAMES_NAME:{
            return{
                ...state,
                videogames: payload
            }
        }

        case GET_GAMES_BY_GENRE:{
            return{
                ...state,
                videogames: payload
            }
        }

        case GET_GAMES_BY_PLATFORM:{
            return{
                ...state,
                videogames: payload
            }
        }

        case ORDER_BY_NAME:{
            return{
                ...state,
                videogames: payload
            }
        }

        case ORDER_BY_RATING:{
            return{
                ...state,
                videogames: payload
            }
        }

        case GET_ALL_GENRES:{
            return{
                ...state,
                genres: payload
            }
        }

        case GET_PLATFORMS:{
            return{
                ...state,
                platforms: payload
            }
        }
        
            default:{
               return state;
            }
    }
}