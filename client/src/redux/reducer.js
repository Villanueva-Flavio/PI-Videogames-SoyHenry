import{
    SEARCH_BY_NAME, GET_ALL_GAMES, GET_GAME_DETAIL, GET_GAMES_NAME, GET_GAMES_BY_GENRE, GET_GAMES_BY_PLATFORM, GET_ALL_GENRES, GET_PLATFORMS, FILTER_BY_CREATED, ORDER_BY_NAME_ASC, ORDER_BY_NAME_DESC,ORDER_BY_RATING_ASC,ORDER_BY_RATING_DESC, FILTER_BY_PLATFORM, FILTER_BY_GENRE
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


        
        case SEARCH_BY_NAME:{
            return{
                ...state,
                videogames: payload
            }
        }

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

        case FILTER_BY_CREATED:{
            return{
                ...state,
                videogames: payload // ToDo
            }
        }

        case ORDER_BY_NAME_ASC:{
            if (payload) {
                return {
                  ...state,
                  videogames: payload.slice().sort((a, b) => a.name - b.name),
                };
            }
            return state;
        }

        case ORDER_BY_NAME_DESC:{
            if (payload) {
                return {
                  ...state,
                  videogames: payload.slice().sort((a, b) => b.name - a.name),
                };
            }
            return state;
        }

        case ORDER_BY_RATING_ASC:{
            if (payload) {
                return {
                  ...state,
                  videogames: payload.slice().sort((a, b) => a.rating - b.rating),
                };
              }
              return state;
        }

        case ORDER_BY_RATING_DESC:{
            if (payload) {
                return {
                  ...state,
                  videogames: payload.slice().sort((a, b) => b.rating - a.rating),
                };
              }
              return state;
        }

        case FILTER_BY_PLATFORM:{
            const platformToFilter = payload;
            const filteredGames = state.allGames.filter((game) =>
                game.platforms.includes(platformToFilter)
            );

            return {
                ...state,
                filteredGames,
                selectedPlatform: platformToFilter,
            };
        }

        case FILTER_BY_GENRE:{
            return {
                ...state,
                videogames: payload ?
                  state.videogames.filter((game) => game.genres.includes(payload)) :
                  state.videogames,
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