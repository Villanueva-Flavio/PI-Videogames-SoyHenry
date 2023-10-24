const {Genre} = require('../db');
const axios = require("axios");
const {API_KEY} = process.env;
const getAllGenres = async ()=>{
    const genresDb = await Genre.findAll();
    
    if(!genresDb.length){
        const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = [];
        data.results.forEach( (e) => genres.push(e.name));
        genres.forEach(async (g) =>{
            await Genre.findOrCreate({
                where: {name: g}
            })
        })
        return genres;
    }
    return genresDb.map((g)=> g.name)
}
module.exports = getAllGenres;

