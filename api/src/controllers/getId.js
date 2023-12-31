const {Videogame, Genre} = require ("../db");
const { API_KEY } = process.env;
const axios = require("axios");
const getVideogameId = async (id) => {
    if (id > 0) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if (!data) throw new Error(`No existe usuario con el id: "${id}.`);
        
            const platforms = data.platforms.map(platform => platform.platform.name);
            const genresApi = data.genres.map(g => g.name);
            return {
                id: data.id,
                name: data.name,
                platforms: platforms,
                image: data.background_image,
                released: data.released,
                rating: data.rating,
                description: data.description,
                genres: genresApi
            }
    }
    
    const videoGameId = await Videogame.findOne({
        where: { id },
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      });

    if (!videoGameId) throw new Error(`No existe usuario con el id: "${id}.`);
        const genresApi = videoGameId.Genre.map(g => g.name);
        const dataLimpia = {
            id: videoGameId.id,
            name: videoGameId.name,
            platforms: videoGameId.platforms,
            image: videoGameId.image,
            rating: videoGameId.rating,
            released: videoGameId.released,
            genres: genresApi,
            description: videoGameId.description
        }

    return dataLimpia;
}

module.exports =getVideogameId;