import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoGreen from '../assets/FitForgeTransparentGreen.png'
import '../styles/Home.css'
import HomeButtons from '../components/HomeButtons.jsx';

function Home() {

    const nav = useNavigate();

    return(
        <div className="mainWrapper">
            <img src={logoGreen} alt="FitForge Logo" className="logo"></img>
            <text class="homeText">Create customizable workout plans tailored to your needs with the power of Artificial Intelligence</text>
            <div className="buttonWrapper">
                <HomeButtons label="Sign In" onClick={() => nav('/signin')} className="signInButton"></HomeButtons>
                <HomeButtons label="Register" onClick={() => nav('/register')} className="registerButton"></HomeButtons>
            </div>
        </div>
    );
}
export default Home;