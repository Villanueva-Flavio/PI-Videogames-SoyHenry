import React, { useEffect } from 'react'
import styles from "./form.module.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getPlatforms, postGame } from '../../redux/actions/actions'
import {useSelector} from "react-redux"
import { validate } from './validate'
import StartButton from '../StartButton/startbutton.jsx'
const Form = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state)=> state.genres)
    const platforms = useSelector((state)=> state.platforms)

useEffect(() => {
    if(platforms.length === 0){ dispatch(getPlatforms()); } 
    if (genres.length === 0) { dispatch(getAllGenres()); }
},[dispatch, genres.length, platforms.length])

    const [form, setForm] = useState({
        name: "",
        image: "",
        description:"",
        platforms:[],
        released:"",
        rating:"",
        genres:[]
    })

    useEffect(()=>{
        const checkFormComplete = () => {
            if(!form.name || !form.image || !form.description || !form.platforms || !form.released || !form.rating || !form.genres){
                setFormComplete(false)
            } else{
                setFormComplete(true)
            }
        }
        checkFormComplete()
    }, [form])

    const [formComplete, setFormComplete] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        image: "",
        description:"",
        platforms:"",
        released:"",
        rating:"",
        genres:"",
    })

    const clearForm = () => {
        setForm({
            name: "",
            image: "",
            description:"",
            platforms:[],
            released:"",
            rating:"",
            genres:[]
        })
    }

    const handleInputs = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setErrors(validate({...form, [e.target.name]: e.target.value}))
    }
    const [selectedGenres, setSelectedGenres] = useState([]);
    
    const removeGenre = (genreToRemove) => {
        setSelectedGenres((prevGenres) => prevGenres.filter((genre) => genre !== genreToRemove));
    };
      
    
    const addGenreToList = (e) => {  
        const selectedGenre = document.querySelector('select[name="genres"]').value;
        if (selectedGenre !== "" && !selectedGenres.includes(selectedGenre) && selectedGenres.length < 3) {
            setSelectedGenres((prevGenres) => [...prevGenres, selectedGenre]);
            const aux = [...selectedGenres]
            aux.push(selectedGenre)
            setForm({
                ...form,
                [e.target.name]: aux
            })
        }
    };

    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    const removePlatform = (platformToRemove) => {
        setSelectedPlatforms((prevPlatforms) => prevPlatforms.filter((platform)=> platform !== platformToRemove))
    }

    const addPlatformToList = (e) => {  
        const selectedPlatform = document.querySelector('select[name="platforms"]').value;
        if (selectedPlatform !== "" && !selectedPlatforms.includes(selectedPlatform) && selectedPlatforms.length < 6) {
            setSelectedPlatforms((prevPlatforms) => [...prevPlatforms, selectedPlatform]);
            const aux = [...selectedPlatforms]
            aux.push(selectedPlatform)
            setForm({
                ...form,
                [e.target.name]: aux
            })
        }
    };

    const [API_KEY] = useState('00b570da421a137379a923f7292c19d7')
    const submitForm = async (e) => {
        e.preventDefault();
        const imageInput = e.target.querySelector('input[type="file"]');
        let data = ""
        if (imageInput.files.length > 0) {
            const formData = new FormData();
            formData.append('image', imageInput.files[0]);
            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
                    method: 'POST',
                    body: formData
                });  
            data = await response.json();

            } catch (error) {
                console.error('Error:', error);
                if(imageInput.files.length === 0){
                    alert('Error al subir la imagen');
                } else if (!formComplete){
                    alert("Completa todos los campos")
                }
            }
        }
        if(formComplete){
            form.image = data.data.url
            console.log(form)
            dispatch(postGame(form))
            alert("Juego creado con éxito");
        clearForm();
        }
    };


  return (
    <div className={styles.bg}>
        <StartButton></StartButton>
        <div className={styles.mainContainer}> 
            <form onSubmit={submitForm} className={styles.form}> 
                <div className={styles.inputContainer}>
                    <h1 className={styles.textMain}>Formulario para agregar <span className={styles.videogame}>videojuego</span></h1>
                    <div className={styles.inputUnit}>
                        <label className={styles.mainText}>Nombre:</label>
                            <input
                                id='name'
                                placeholder='Nombre'
                                onChange={handleInputs}
                                className={styles.input}
                                type='text'
                                value={form.name}
                                name='name'
                            />
                            <span className={styles.error}>{errors?.name}</span>
                        </div>
                  
                        <div className={styles.inputUnit}>
                            <label className={styles.mainText}>Imágen:</label>
                            <input
                                id='image'
                                onChange={handleInputs}
                                className={styles.input}
                                type='file'
                                value={form.image}
                                name='image'
                            />
                            <span className={styles.error}>{errors?.image}</span>
                        </div>
                        <div className={styles.inputUnit}>
                            <label className={styles.mainText}>Descripción:</label>
                            <input
                                id='description'
                                onChange={handleInputs}
                                className={styles.input}
                                type='text'
                                value={form.description}
                                name='description'
                            />
                            <span className={styles.error}>{errors?.description}</span>
                        </div>
                        <div className={styles.inputUnit}>
                            <label className={styles.mainText}>Platformas:</label>
                            <select className={styles.input} name="platforms" onChange={addPlatformToList}>
                                <option value="" name="" hidden> Selecciona hasta 6 plataformas </option>
                                {platforms.map((platform, index) => (
                                <option key={index} value={platform}>{platform}</option>
                                ))}
                            </select>
                            <span className={styles.error}>{errors?.platforms}</span>
                        </div>
                        <div className={styles.inputUnit}>
                            <label onChange={handleInputs} className={styles.mainText}>Fecha de estreno:</label>
                            <input
                                id='released'
                                className={styles.input}
                                type='date'
                                value={form.released}
                                onChange={handleInputs}
                                name='released'
                            />
                        </div>
                        <div className={styles.inputUnit}>
                            <label className={styles.mainText}>Puntaje:</label>
                            <input
                                onChange={handleInputs}
                                className={styles.input}
                                type='number'
                                value={form.rating}
                                name='rating'
                            />
                            <span className={styles.error}>{errors?.rating}</span>
                        </div>
                        <div className={styles.inputUnit}>
                            <label className={styles.mainText}>Generos:</label>
                            <select className={styles.input} name="genres" onChange={addGenreToList}>
                                <option value="" name="" hidden> Selecciona hasta 3 géneros </option>
                                {genres.map((genre, index) => (
                                <option key={index} value={genre}> {genre} </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.listContainer}>
                            <ul className={styles.selectedList}>
                            {selectedGenres.map(genre => (
                                <li key={genre}>
                                    <button className={styles.tooltip} onClick={() => removeGenre(genre)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25" >
                                            <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                        <span>{genre}</span>
                                    </button>
                                </li>
                            ))}
                            </ul>
                            <ul className={styles.selectedList}>
                            {selectedPlatforms.map(platform => (
                                <li key={platform}>
                                    <button className={styles.tooltip} onClick={() => removePlatform(platform)}>
                                        <span>{platform}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                                            <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.botones}>
                    <button className={styles.submit} type='submit'> Añadir Juego </button>
                </div>
            </form>
        </div>
    </div>
)}

export default Form