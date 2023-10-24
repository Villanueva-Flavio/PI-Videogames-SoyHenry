const axios = require('axios');
const { API_KEY } = process.env;

const getPlatforms = async (req, res) => {
    try {
        const response =  await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)

        const platforms = response.data.results.map((platform) => {
            return {
                id: platform.id,
                name: platform.name
            };
        });

        const responsePlatforms = platforms.map(platform => platform.name)

        console.log('Platforms imported!');
        return res.status(200).json(responsePlatforms);
    } catch (error) {
        console.error('Error Fetching Data:', error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports =getPlatforms;