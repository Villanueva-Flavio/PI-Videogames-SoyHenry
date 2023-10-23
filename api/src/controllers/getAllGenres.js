const {Genre} = require('../db');
const axios = require("axios");
const apiKey = "558880a315b54b9bb10e2d681a2ae747";
const getAllGenres = async ()=>{
    const genresDb = await Genre.findAll();
    if(!genresDb.length){
        const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
        const genres = [];
        data.results.forEach( (e) => genres.push(e.name));
        genres.forEach(async (g) =>{
            await Genre.findOrCreate({
                where: {name: g}
            })
        })
        return genres;
    }
    return genresDb
}

module.exports = getAllGenres;