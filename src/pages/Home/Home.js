import React from 'react'
import "./Home.css";
import homePic from "../../assets/home-pic.jpg";

const Home = () => {
  return (
    <section className='home-container'>
        <div>
            <h1>Welcome Home, Master!</h1>
            <br/>     
            <div className="dotted" />
            <br/>
            <p>Welcome to <span>The Mewing Maid Cat'fe</span>! Our Personal Maids are available to all, and will make you feel loved and at home for no cost. We work off smiles and tips. So please, treat us well so we may continue to serve all of Eorzea.</p>
            <br/>
            <p><span>Open Saturdays ~ 10 am-1 pm CST</span></p>
        </div>
        <img src={homePic} alt="Nitty Smiling" width={350} />
    </section>
  )
}

export default Home