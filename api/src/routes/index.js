const { Router } = require('express');
const videogamesRouter = require("./videogamesRouter");
const genreRouter = require ("./genresRouter")
const router = Router();

router.use("/videogames", videogamesRouter)
router.use("/genre", genreRouter)

module.exports = router;
