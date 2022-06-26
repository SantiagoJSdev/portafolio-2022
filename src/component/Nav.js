

import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import '../styles/nav.css'
import { types } from '../types/types';


export const Nav = () => {


    const { user, dispatch } = useContext(Context);


    const [scroll, setScroll] = useState({
        activo: 0,
        resultado: true
    })
    const [toggle, setToggle] = useState({
        activo: false,

    })

    window.addEventListener('scroll', () => {
        const scrollPx = window.scrollY
        setScroll(scroll => ({ ...scroll, activo: scrollPx }))
        if (scrollPx > scroll.activo) {
            setScroll(scroll => ({ ...scroll, activo: scrollPx, resultado: false }))
        } else {
            setScroll(scroll => ({ ...scroll, activo: scrollPx, resultado: true }))
        }
    })
    const handleToggle = () => {
        setToggle({ ...toggle, activo: !toggle.activo })
        dispatch({
            type: types.darkMode,
            payload: toggle.activo
        })
    }

    const handleAside = () => {
        const item = document.getElementsByClassName('aside-lateral')
        item[0].classList.replace('aside-lateral', 'aside-lateral-cambio')
        let lis = window.document.querySelector('.aside-lateral__menu > ul')
        let lis1 = window.document.querySelector('.aside-lateral__menu > div')
        console.log(lis1.animate([
            { transform: 'translateX(100px)' },
            { transform: 'translateX(0px)' },
        ], {
            duration: 2000,
        }))
        Array.from(lis.children).forEach(function (item, ind) {

            item.animate([
                // {['margin-left']: '-100px'}
                { transform: 'translateX(130px)' },
                { visibility: 'visible' },

                { transform: 'translateX(0px)' },
            ], {
                duration: 1000 + ind * 300,
            })
            // item.classList.replace('cla', 'classLi' ) 
        });
    }

    const handleSalir = () => {
        const item = document.getElementsByClassName('aside-lateral-cambio')
        item[0].classList.replace('aside-lateral-cambio', 'aside-lateral')

        let lis = window.document.querySelector('.aside-lateral__menu > ul')
        let lis1 = window.document.querySelector('.aside-lateral__menu > div')
        console.log(lis1.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(100px)' },

        ], {
            duration: 2000,
        }))
        Array.from(lis.children).forEach(function (item, ind) {

            item.animate([
                // {['margin-left']: '-100px'}
                { transform: 'translateX(0px)' },
                { transform: 'translateX(130px)' },
                { visibility: 'visible' },


            ], {
                duration: 1000 + ind * 300,
            })
            // item.classList.replace('cla', 'classLi' ) 
        });
    }
    return (<>


        <nav className={scroll.activo === 0 ? user.mode ? 'header__nav--mode' : 'header__nav' : scroll.resultado ? user.mode ? 'header__nav-1-mode' : 'header__nav-1' : 'activo'}>
            
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/santiagoa31219' target="blank"><i className="fab fa-linkedin-in"></i></a>
                    <a href='https://github.com/SantiagoJSdev' target="blank"><i className="fab fa-github-alt"></i></a>
                </li>
                <li ><h3 className='li-interno'>Santiagoreyesmarin1986@gmail.com</h3></li>
                <li>
                    <div
                        onClick={handleToggle}
                        className={toggle.activo ? 'toggle--mode' : "toggle"}>
                        <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg>
                        <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg>
                        <div className={toggle.activo ? "t-button-toggle" : "t-button"}></div>
                    </div>
                </li>
                <li><i onClick={handleAside} className="fas fa-bars"></i></li>
            </ul>
        
            <div className={'aside-lateral'}>
                <div className={user.mode ? 'aside-lateral__salir-mode' : 'aside-lateral__salir'}><i onClick={handleSalir} className="fas fa-times"></i></div>
                <div className={user.mode ? 'aside-lateral__menu-mode' : 'aside-lateral__menu'}>
                    <ul>
                        <li className='cla'><a href='#page-inicio'>Inicio</a></li>
                        <li className='cla'><a href='#page-servicio'>Servicio</a></li>
                        <li className='cla'><a href='#page-experiencia'>Experiencia</a></li>
                        <li className='cla'><a href='#page-habilidades'>Habilidades</a></li>
                        <li className='cla'><a href='#page-contacto'>Contacto</a></li>
                    </ul>
                    <div className={user.mode ? 'aside-lateral__menu--div-mode' : 'aside-lateral__menu--div'} ></div>
                </div>
                <div className={user.mode ? 'aside-lateral__redes-mode' : 'aside-lateral__redes'}>
                    <ul>
                        <li><i className="fab fa-linkedin"></i></li>
                        <li><i className="fab fa-github-square"></i></li>
                        <li><i className="fab fa-instagram-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>

                    </ul>
                </div>
            </div>
        </nav>

    </>
    )
}
