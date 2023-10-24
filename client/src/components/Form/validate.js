export const validate = (data)=>{
    const regexName = /^[a-zA-Z\s]+$/;
    let errors = {};

    if (!data.name){
        errors.name = "El nombre es obligatorio"
    } else if(data.name.length > 15){
        errors.name = "Nombre muy largo"
    } else if (!regexName.test(data.name)) errors.name = "Solo se aceptan letras"

    if (!data.image){
        errors.image = "Requiere foto"
    }

    if (!data.description) {
        errors.description = "Requiere descripción"
    }

   

    return errors
}