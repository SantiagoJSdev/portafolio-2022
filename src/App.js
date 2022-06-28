import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import { Contacto } from './component/Contacto';
import { Experiencias } from './component/Experiencias';
import { Habilidades } from './component/Habilidades';
import { Nav } from './component/Nav';
import { PrincipalDescripcion } from './component/PrincipalDescripcion';
import { Servivios } from './component/Servivios';
import { Context } from './context/Context';
import { reducerApp } from './context/reducerApp';

const init = () => ({ darkMode: false })

function App() {


  const [user, dispatch] = useReducer(reducerApp, {}, init)



  return (
    <Context.Provider value={{ user, dispatch }}>


      <div className="container__home">

        <header className="home__header">
          <Nav />
        </header>

        <section id="page-inicio" className={user.mode ? 'darkMode' : 'home__principal'}>
          <PrincipalDescripcion />
        </section>

        <section id="page-servicio" className={user.mode ? 'darkMode-segundo' : 'home__segundo'}>
          <Servivios />
        </section>

        <section id="page-experiencia" className={user.mode ? 'home__experiencias-mode' : 'home__experiencias'}>
          <Experiencias />
        </section>

        <section id="page-habilidades" className='home__habilidades'>
          <Habilidades />
        </section>
        <section id="page-contacto" className={user.mode ? 'home__contacto-mode' : 'home__contacto'}>
          <Contacto />
        </section>

      </div>
    </Context.Provider>
  );
}

export default App;
