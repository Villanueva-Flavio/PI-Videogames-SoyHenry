const {Videogame, Genre} = require("../db")

const getVideogameBd = async ()=>{
    const dataDB = await Videogame.findAll({include:{
        model: Genre,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }});
    const cleanData =  dataDB.map((clean) =>{
        const genresApi = clean.Genres.map(g => g.name);
        return {
            id: clean.id,
            name: clean.name,
            platforms: clean.platforms,
            image: clean.image,
            rating: clean.rating,
            genres: genresApi
        }
    })
    return cleanData;
};

module.exports = getVideogameBd;