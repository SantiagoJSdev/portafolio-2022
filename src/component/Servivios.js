

import '../styles/servicios.css'

export const Servivios = () => {
    return (<>
        <div className='home__segundo--circulo'></div>
        <div className='carrousel'>
            <div className='grande'>
                <div className='img'><a href='https://www.instagram.com/santiagojoserm/' target="blank"><i className="fab fa-instagram-square"></i></a></div>
                <div className='img'><a href='https://twitter.com/SantiagoJSdev' target="blank"><i className="fab fa-twitter-square"></i></a></div>
                <div className='img'><a href='https://www.linkedin.com/in/santiagoa31219' target="blank"><i className="fab fa-linkedin"></i></a></div>
                <div className='img'><a href='https://github.com/SantiagoJSdev' target="blank"><i className="fab fa-github-square"></i></a></div>
            </div>
        </div>
        <div className='home__segundo--servicio1'>
            <h1>2</h1>
            <p>Años en el mundo web</p>
        </div>
        <div className='home__segundo--servicio2'>
            <div className='servicio2__title'>
                <h1>Desarrollador Web Full Stack</h1>
            </div>
            <div className='servicio2__box'>
                <div className='servicio2__box--1'>
                    <h1>Desarrollo Web</h1>
                    <p>Una buena arquitectura web, con una alta velocidad de carga, con un diseño atractivo y una buena usabilidad.</p>
                    <h3>CONTÁCTAME <i className="fas fa-arrow-right"></i></h3>
                </div>
                <div className='servicio2__box--2'>
                    <h1>Estrategia Digital</h1>
                    <p>Determinar los requerimientos y necesidades del usuario, en base a ello definir las tecnologías requerida para la óptima funcionalidad del desarrollo.</p>
                    <h3>CONTÁCTAME <i className="fas fa-arrow-right"></i></h3>
                </div>
            </div>
        </div>


    </>
    )
}
