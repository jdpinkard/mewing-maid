import React, { useState, useEffect } from "react";
import TTTgame from "./pages/TTTgame/TTTgame";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mewing1s from "./assets/Mewing1s.jpg";
import Mewing2s from "./assets/Mewing2s.jpg";
import Mewing3s from "./assets/Mewing3s.jpg";


import "./App.css";

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(modalIsOpen);
  }, [modalIsOpen]);

  return (
    <div className="background-container">
      <div className="background-noise"></div>
      <img className="background-slides" src={Mewing1s} alt="Mewing Slide 1" />
      <img className="background-slides" src={Mewing2s} alt="Mewing Slide 2" />
      <img className="background-slides" src={Mewing3s} alt="Mewing Slide 3" />
      <div className={`main-container ${modalIsOpen && "modal-open"}`}>
        <Header />
        <TTTgame setModalIsOpen={setModalIsOpen} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
