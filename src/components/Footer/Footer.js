import React from 'react'
import "./Footer.css";
import discord from "../../assets/discord-icon.png";

const Footer = () => {
  return (
    <div className='footer-container'>
        <a href="https://discord.gg/QNQExaqmzA" target="_blank" rel="noreferrer"><img src={discord} alt="Mewing Maid Logo" /></a>
        <p>&copy; 2022 The Mewing Maid Cat'fe. All rights to serve and assist mew, Mewster!</p>
    </div>
  )
}

export default Footer