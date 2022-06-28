    

    export const validate = ( nombre, email, mensaje ) => {
        let error = {};
    let regName = /^[a-z ,.'-]+$/i;
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nombre.trim().length === 0 || nombre.trim().length < 2) {
        error.nombre = "Nombre requirido";
    }
    if (!regName.test(nombre)) {
        error.nombre = "Nombre invalido"
    };
    if (email.trim().length === 0 || email.trim().length < 5) {
        error.email = "Email requerido";
    }
    if (!regEmail.test(email)) {
        error.email = "Email requerido";
    }
    if (mensaje.trim().length === 0 || mensaje.trim().length < 2) {
        error.mensaje = "Mensaje requirido";
    }
    return error;
};

