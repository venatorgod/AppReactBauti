import './App.css'
import { IMAGENES, separador, fondo } from "./data.js"
import { motion, AnimatePresence } from "motion/react";
import { useState } from 'react';
import InitialLetter from './components/InitialLetter/InitialLetter';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CartaAbajo from "./components/CartaAbajo/CartaAbajo";
function App() {
  const [counter, setCounter] = useState(0);
  const TEXTOS = [
    "Lu, Toca la carta",
    "Otra vez",
    "Uy! uy! uy! que sera",
    "Ya falta poco",
    "No pares ahora"
  ];
  return (
    <>
      <AnimatePresence mode='wait'>
        {
          counter <= 4 &&
          <motion.div
            id="InitialLetterContainer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <InitialLetter onClick={
              () => {
                setCounter(counter + 1);
              }
            } />
            <h1 style={{ paddingTop: "0px", paddingBottom: "0px" }} id="TextClicks">{TEXTOS[counter]}</h1>
            <ProgressBar progress={counter * 20} height="30px" color='pink' />
          </motion.div >
        }
        {
          counter > 4 &&
          <motion.div
            style={{
              paddingBottom: "0px",
              paddingTop: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              borderLeft: "0px",
              borderRight: "0px"
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {
              <>
                <section
                  style={{
                    marginTop: "100px",
                    backgroundImage: "url(" + fondo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: "120px",
                    paddingTop: "40px",
                    paddingLeft: "60px",
                    paddingRight: "60px",
                  }}
                  id="SeccionCarta"
                >
                  <CartaAbajo></CartaAbajo>
                </ section>
                <img draggable="false" src={separador}></img>

                {IMAGENES.map((img) => <img draggable="false" src={img} alt="Imagen" />)}
              </>
            }
          </motion.div>
        }
      </ AnimatePresence >
    </>
  )
}

export default App
