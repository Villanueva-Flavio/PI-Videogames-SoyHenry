const axios = require ("axios")
const {API_KEY} = process.env;
const getName = async (name) =>{
    const nameRequest = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}}`)
    try {
       const search = await nameRequest.data.results.map(el => {
        return {
            id: el.id,
            name: el.name,
            image: el.background_image,
            rating: el.rating,
            platforms: el.platforms?.map(el => el.platform.name),
            genres: el.genres?.map(el => el.name)
        }})
       return search
    } catch (error) {
        console.error("Hay un error en getName")
    }
}

module.exports = getName;