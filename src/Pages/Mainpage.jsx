import React, { useRef } from "react";
import "../App.css";
import { AiOutlineDown } from "react-icons/ai";
import borderline2 from "../img/borderline2.mp4";
import descripcionTeatro from "../img/descripcionTeatro.jpg";
import deforestacion from '../img/deforestacion.mp4'
import tiktoks from "/Users/victorsalgado/Desktop/portafoliosFabiola2/src/img/mezlatiktoks.mp4"
import {Modalcito} from '../Components/Modalcito'
export const Mainpage = () => {
  const myRef = useRef();
  const navegarHome = () => {
    myRef.current.scrollIntoView();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="overlay"></div>
        <video src={borderline2} autoPlay loop muted />          
      <div className="content">
          <h1personalizado className="rojito" onClick={() => navegarHome()} heading="100px">
            Fabiola Águila
          </h1personalizado>
          <h2personalizado className="rojito" onClick={() => navegarHome()}>
            Publicista
            

          </h2personalizado>
          <Modalcito/>
         </div>
      </header>
      <div class="column">
        <img src={descripcionTeatro} width="900" height="700" />
      </div>
      <h1 ref={myRef} className="rojitoespecial2">
        Persecución mental fue un proyecto realizado mediante teatro integral en
        donde realicé la labor de directora y escritora con el fin de ejecutar
        una obra audiovisual.
      </h1>
      <br/>
      <div class="column">
        <video src={deforestacion} autoPlay loop muted style={{marginTop:'200px', height:'1000px'}}/>
        <video src={tiktoks} autoPlay loop muted style={{marginTop:'200px', height:'1000px'}}/>
      </div>
      <h1 className="rojitoespecial2" style={{marginTop:'25%', marginLeft:'20%'}}>
      Video realizado en conjunto a dupla creativa con el objetivo de viralización y difusión ante problemática ocurrida en sectores de Pucón.
      <br />
      <br/>
      <br/>
      Tik toks realizados para el equipo de comunicación comunal por Gabriel Boric con el fin de promover su candidatura y establecer una relación con el público objetivo tras una estrategia realizada y analizada exhaustivamente.
      </h1>
    </div>
  );
};
