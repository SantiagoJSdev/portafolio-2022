

import { useEffect, useRef } from 'react'
import '../styles/servicios.css'

export const Servivios = () => {

    const refNav = useRef(null)

    useEffect(() => {
        // const item1 = document.getElementById('home__segundo--servicio1')
        const item1 = document.getElementById('page-servicio')

            const item4 = document.getElementById('home__segundo--servicio1')

        const item2 = document.getElementById('servicio2__title1')
        const item3 = document.getElementById('servicio2__box1')

        const onChange = entries => {
            entries.forEach(entry => {
    
                if (entry.isIntersecting) {
                     item4.classList.replace('nuevo-home__segundo--servicio1', 'home__segundo--servicio1')
                    item2.classList.replace('nuevo-servicio2__title', 'servicio2__title')
                    item3.classList.replace('nuevo-servicio2__box', 'servicio2__box')
                } else {
                     item4.classList.replace('home__segundo--servicio1', 'nuevo-home__segundo--servicio1')
                    item2.classList.replace('servicio2__title', 'nuevo-servicio2__title')
                    item3.classList.replace('servicio2__box', 'nuevo-servicio2__box')
                
                }
    
            })
        }
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 })
        console.log(observer.observe(item1))
        // console.log(observer.observe(refNav.current))
    }, [refNav])
    
 





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
        <div ref={refNav} id='home__segundo--servicio1' className='nuevo-home__segundo--servicio1'>
            <h1>2</h1>
            <p>Años en el mundo web</p>
        </div>
        <div className='home__segundo--servicio2'>
            <div id='servicio2__title1' className='nuevo-servicio2__title'>
                <h1>Desarrollador Web Full Stack</h1>
            </div>
            <div id='servicio2__box1' className='nuevo-servicio2__box'>
                <div className='servicio2__box--1'>
                    <h1>Desarrollo Web</h1>
                    <p>Una buena arquitectura web, con una alta velocidad de carga, con un diseño atractivo y una buena usabilidad.</p>
                    <h3><a href='#page-contacto'>CONTÁCTAME</a> <i className="fas fa-arrow-right"></i></h3>
                </div>
                <div className='servicio2__box--2'>
                    <h1>Estrategia Digital</h1>
                    <p>Determinar los requerimientos y necesidades del usuario, en base a ello definir las tecnologías requerida para la óptima funcionalidad del desarrollo.</p>
                    <h3><a href='#page-contacto'>CONTÁCTAME </a> <i className="fas fa-arrow-right"></i></h3>
                </div>
            </div>
        </div>


    </>
    )
}
