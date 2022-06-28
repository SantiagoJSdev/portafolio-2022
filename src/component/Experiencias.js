import { useContext } from 'react';
import { Context } from '../context/Context';
import '../styles/experiencias.css'


export const Experiencias = () => {

    const { user } = useContext(Context);



    return (<>

        <div className='experiencias__contenido'>
            <div className={user.mode ? 'experiencias__contenido--title-mode' : 'experiencias__contenido--title'}>
                <h1>Experiencia</h1>
            </div>
            <div className={user.mode ? 'experiencias__contenido--content-mode' : 'experiencias__contenido--content'}>
                <div> <h3>Tecnopac. May. 2022</h3> <h1> <a href='https://una-idea.herokuapp.com/' target="blank">Proyecto 1Idea: Desarrollo inicial WebApp para una empresa de consultoría, inicio sesión usuario, inicio Google, notificaciones de correo electrónico(Nodemailer), JSON Web Token (JWT).</a></h1> <p>JavaScript / React / HTML5 / CSS3 / Node.js / Express / Mongoose / Mongodb /Responsive Design</p></div>
                <div><h3>Tecnopac. Mar. 2022</h3><h1> <a href='https://una-idea.herokuapp.com/' target="blank">Proyecto EstuHouse: Desarrollo WebApp para una empresa alquiler de apartamentos, sesión usuario, inicio Google, notificaciones de correo(Nodemailer), panel administrador, panel usuario, manejo de la data.</a></h1> <p>JavaScript / React / HTML5 / CSS3 / Node.js / Express / Mongoose / Mongodb</p></div>
                <div><h3>RESTServer. Jun. 2022</h3><h1> <a href='https://github.com/SantiagoJSdev/RestServer-10' target="blank">REST Server, servicios para una E-commerce: Inicio de usuario, inicio Google, manejo de datos, productos, categorias, validacions, JSON Web Token (JWT),</a></h1> <p> Node.js / Express / JavaScript / Mongoose / Mongodb</p></div>
                <div><h3>Bootcamp soy Henry. Mar. 2022</h3><h1> <a href='https://pg-henry.vercel.app/' target="blank">Proyecto E-commerce: E-commerce, registro usuario, inicio Google, notificaciones de correo electrónico, panel administrador, panel usuario, manejo de la data, mercadopago, JSON Web Token (JWT).</a></h1> <p>JavaScript / React / HTML5 / CSS3 / Node.js / Express / Sequelize / PostgreSQL</p></div>
                <div><h3>Portafolio 2021</h3><h1> <a href='https://santiagojsdev.github.io/portafolio/' target="blank">Proyectos varios </a></h1> <p>JavaScript / React / Redux / HTML5 / CSS3 / Node.js / Express / Sequelize / Mongoose / PostgreSQL / Firebase / MongoDB / Bootstrap</p></div>

            </div>
        </div>

    </>
    )
}
