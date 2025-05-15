import { useState, StyleSheet } from 'react';
import logoGreen from '../assets/FitForgeTransparentGreen.png'
import '../styles/Home.css'

function Home() {
    return(
        <div className="mainWrapper">
            <img src={logoGreen} alt="FitForge Logo" className="logo"></img>
            <text class="homeText">Create customizable workout plans tailored to your needs with the power of Artificial Intelligence</text>
        </div>
    );
}
export default Home;