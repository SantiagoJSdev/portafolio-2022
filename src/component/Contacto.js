
 import { useContext } from 'react';
import { Context } from '../context/Context';
import { useForm } from '../hook/useForm';
import '../styles/contacto.css'

export const Contacto = () => {
    const { user } = useContext(Context);

    const [values, handleInputChange, reset, error] = useForm({
        nombre: '',
        email: '',
        mensaje: ''

    });

    const { nombre, email, mensaje } = values;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        reset()
    }
 
    return (
        < >
            <div className={user.mode ? 'contacto__left-mode':'contacto__left'}>
                <h1>Contacto</h1>
                <p>Si tienes un proyecto, o quieres contactarme, envíame un correo o rellena el siguiente formulario y te contactare lo más pronto posible.</p>
                <h2>EMAIL:</h2>
                <h3>Santiagoreyesmarin1986@gmail.com</h3>
                <h4>Descarga mi CV </h4>
                <a href='https://github.com/SantiagoJSdev/aboutNew/files/8950914/Santiago-Pdf.pdf' target={'_blank'}><button className='btn'>Descargar</button></a>

            </div>
            <div className={user.mode ? 'contacto__right-mode':'contacto__right'}>
                <h1>Puedes contactar conmigo a través del siguiente formulario.</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        
                        <input
                            className={'inputNombre'}
                            placeholder={'Tu Nombre'}
                            autoComplete='off'
                            name='nombre'
                            type='text'
                            value={nombre}
                            onChange={handleInputChange}
                        ></input>
                        
                        <input
                            className={'inputEmail'}
                            placeholder={'Tu Email'}
                            autoComplete='off'
                            name='email'
                            type='text'
                            value={email}
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    
                    <textarea
                        className={'textarea'}
                        placeholder={'Tu Mensaje'}
                        autoComplete='off'
                        name='mensaje'
                        type='text'
                        value={mensaje}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>

        </ >
    )
}
