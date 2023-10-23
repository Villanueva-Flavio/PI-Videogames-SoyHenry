const { Videogame } = require("../db");

const createVideogame = async (videogame) => {
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg|webp)/;
    const { name, description, released, rating, platforms, genres, background_image } = videogame;
    const repetido = await Videogame.findOne({where: { name: name, released: released , genres: genres, platforms: platforms}})
    const generoExiste = await Videogame.findOne({where: { genres: genres}})
    if(!name || !description || !released || !rating || !platforms || !genres || !background_image) throw new Error("Faltan datos del videojuego")
    if(!genres.length && generoExiste)                                                              throw new Error("El videojuego debe tener al menos un género")
    if(!platforms.length)                                                                           throw new Error("El videojuego debe tener al menos una plataforma")
    if(!name.length)                                                                                throw new Error("El nombre del videojuego no puede estar vacío")
    if(!description.length)                                                                         throw new Error("La descripción del videojuego no puede estar vacía")
    if(!released.length)                                                                            throw new Error("La fecha de lanzamiento del videojuego no puede estar vacía")
    if(!rating.length)                                                                              throw new Error("El rating del videojuego no puede estar vacío")
    if(!platforms.length)                                                                           throw new Error("El videojuego debe tener al menos una plataforma")
    if(!background_image.length && !regexImage.test(background_image))                              throw new Error("La imagen de fondo debe ser válida")
    if(repetido)                                                                                    throw new Error("El videojuego ya existe")

    const newVideogame = await Videogame.create(videogame);
    return newVideogame;
}

module.exports = createVideogame;