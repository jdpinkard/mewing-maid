import React, { useState, useEffect } from "react";
import TTTgame from "./pages/TTTgame/TTTgame";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(modalIsOpen);
  }, [modalIsOpen]);

  return (
        <div className={`main-container ${modalIsOpen && "modal-open"}`}>
          <Header />
          <TTTgame setModalIsOpen={setModalIsOpen} />
          <Footer />
        </div>
  );
};

export default App;
