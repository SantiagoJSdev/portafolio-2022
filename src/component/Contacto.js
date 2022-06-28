
import { useContext, useState } from 'react';
import { postContacto, postContactoAdmin } from '../action/contact';
import { Context } from '../context/Context';
import { useForm } from '../hook/useForm';
import { validate } from "../selector/validate";
import '../styles/contacto.css'

export const Contacto = () => {
    const { user } = useContext(Context);
    const [error, setError] = useState({})

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        mensaje: ''

    });

    const { nombre, email, mensaje } = values;

    const handleSubmit = async (e) => {
        const item = document.getElementById('oculto1')
        const item1 = document.getElementById('contacto__right1')
        const item2 = document.getElementById('submit-btn')


         e.preventDefault()
         let validar = validate(nombre, email, mensaje)
        if (!Object.keys(validar).length && nombre.length > 0) {
            item2.classList.add('submit-btn1')
            await postContacto(email, nombre)
            await postContactoAdmin(email, nombre, mensaje)
            item.classList.replace('oculto', 'visible')
            item1.classList.add('contacto__right-1')
           

        }
        setError(validar)
 
        reset()
    }

    return (
        < >
            <div className={user.mode ? 'contacto__left-mode' : 'contacto__left'}>
                <h1>Contacto</h1>
                <p>Si tienes un proyecto, o quieres contactarme, envíame un correo o rellena el siguiente formulario y te contactare lo más pronto posible.</p>
                <h2>EMAIL:</h2>
                <h3>Santiagoreyesmarin1986@gmail.com</h3>
                <h4>Descarga mi CV </h4>
                <a href='https://github.com/SantiagoJSdev/aboutNew/files/8950914/Santiago-Pdf.pdf' target={'_blank'}><button className='btn'>Descargar</button></a>

            </div>
            <div id='oculto1' className='oculto'>Muchas gracias por tu mensaje...</div>
            <div id='contacto__right1' className={user.mode ? 'contacto__right-mode' : 'contacto__right'}>
                <h1>Puedes contactar conmigo a través del siguiente formulario.</h1>

                <form onSubmit={handleSubmit}>
                    <div>

                        <input
                            className={'inputNombre'}
                            placeholder={error.nombre ? 'Tu nombre es requerido'  : 'Tu Nombre'}
                            autoComplete='off'
                            name='nombre'
                            type='text'
                            value={nombre}
                            onChange={handleInputChange}
                        ></input>

                        <input
                            className={'inputEmail'}
                            placeholder={error.email ? 'Tu email es requerido'  : 'Tu Email'}
                            autoComplete='off'
                            name='email'
                            type='text'
                            value={email}
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    <textarea
                        className={'textarea'}
                        placeholder={error.mensaje ? 'Tu mensaje es requerido'  :'Tu Mensaje'}
                        autoComplete='off'
                        name='mensaje'
                        type='text'
                        value={mensaje}
                        onChange={handleInputChange}
                    ></textarea>
                    <button id='submit-btn' type='submit'>Enviar</button>
                </form>
            </div>

        </ >
    )
}
