
import { useEffect, useRef } from 'react'
import '../styles/habilidades.css'


export const Habilidades = () => {
    const refNav = useRef(null)
    useEffect(() => {
        const item1 = document.getElementById('img2')
        const item2 = document.getElementById('img3')
        const item3 = document.getElementById('img4')
        const onChange = entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    item1.classList.replace('img--2', 'right__img--2')
                    item2.classList.replace('img--3', 'right__img--3')
                    item3.classList.replace('img--4', 'right__img--4')
                } else {
                    item1.classList.replace('right__img--2', 'img--2')
                    item2.classList.replace('right__img--3', 'img--3')
                    item3.classList.replace('right__img--4', 'img--4')
                }

            })
        }
        const observer = new IntersectionObserver(onChange, { threshold: 0.5 })
        observer.observe(refNav.current)
    }, [refNav])



    return (
        < >

            <div className='home__habilidades--right'>
                <div className='right__caja' ref={refNav}>
                    <img className='img--2' id='img2' alt='img2' src='https://user-images.githubusercontent.com/87577172/175792106-10b1a2f1-b34d-42d4-a775-507144d32aae.gif' />
                    <img className='img--3' id='img3' alt='img3' src='https://user-images.githubusercontent.com/87577172/175792205-756f2cfd-5428-45d7-9361-9fb77f9049e0.gif' />
                    <img className='img--4' id='img4' alt='img2' src='https://user-images.githubusercontent.com/87577172/175792263-0a00457f-cb71-45c6-9828-8b1767ad8764.gif' />

                </div>
                <img src='https://user-images.githubusercontent.com/87577172/175791946-d66ee908-535d-4e00-b2a2-ede19ce4336a.png' alt='img' className='right__img' />
            </div>
            <div className='home__habilidades--left'>
                <h1>Habilidades</h1>
                <p>Desarrollos <span>escalables y óptimos</span> teniendo en cuenta la experiencia de usuario, quiero utilizar <span>el diseño y el desarrollo web </span> como herramienta de impacto a los ojos del mundo, además <span> tengo buena capacidad para desarrollar </span> en grupo.</p>
                <h3>Estoy en constante desarrollo, me describo en 3 palabras <span>Proactivo, Comprometido y Responsable.</span></h3>
                <div className='left__content'>
                    <div className='skill-frontend'>
                        <h1>Front-End <i className="fab fa-js-square"></i></h1>
                        <div>
                            <div className='btn-skill'><h2>JavaScript</h2></div>
                            <div className='btn-skill'><h2>React</h2></div>
                            <div className='btn-skill'><h2>Redux</h2></div>
                            <div className='btn-skill'><h2>CSS</h2></div>
                            <div className='btn-skill'><h2>Html</h2></div>
                            <div className='btn-skill'><h2>TypeScript</h2></div>
                        </div>
                    </div>
                    <div className='skill-backend'>
                        <h1>Back-End <i className="fab fa-node-js"></i></h1>
                        <div>
                            <div className='btn-skill'><h2>NodeJs</h2></div>
                            <div className='btn-skill'><h2>Express</h2></div>
                            <div className='btn-skill'><h2>Sequelize</h2></div>
                            <div className='btn-skill'><h2>Mongoose</h2></div>
                            <div className='btn-skill'><h2>MongoDB</h2></div>
                            <div className='btn-skill'><h2>PostgreSQL</h2></div>
                        </div>
                    </div>
                </div>

            </div>


        </ >
    )
}
