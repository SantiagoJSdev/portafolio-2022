import { useContext } from 'react';
import { Context } from '../context/Context';
import '../styles/principalDescripcion.css'

export const PrincipalDescripcion = () => {

    const { user } = useContext(Context);

    


    return (<>
        <div className={user.mode ? 'home__principal--descripcion-mode' : 'home__principal--descripcion'}>
            <h1>¡Hola! Soy Desarrollador Full Stack con Orientación al <span>Front-End</span></h1>
        </div>
       
        <div className={user.mode ? 'home__principal--circulo-mode' : 'home__principal--circulo'}>
            <img src='https://user-images.githubusercontent.com/87577172/175361110-d2f93b88-5d60-46bf-ac91-b1743be0d6b1.png' alt='img' />
        </div>

    </>
    )
}
