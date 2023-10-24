const getVideogameBd = require ("../controllers/getVideogameBd")
const getVideogamesApi = require ("../controllers/getVideogameApi")
 const infoTotal = async () =>{
    const apiData = await getVideogamesApi();
    const dbData = await getVideogameBd();
    const allVideogames = [...apiData, ...dbData]
    return allVideogames; 
 }

 module.exports = infoTotal;