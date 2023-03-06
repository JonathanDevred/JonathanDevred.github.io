import { memo } from "react";
import { Link } from "react-router-dom";

import './styles.scss';


const HomePage = () => {


    return (

       <>
       <body>

<header className="header-container">


    <h2 className="header__title">BIENVENUE !</h2>
    <img className="photo" src="./images/jonathan-no-background.png" alt="photo jonathan" />


</header>

<main className="main-container">

    <div className="title-container">
        <h1 className="title">JONATHAN DEVRED</h1>
        <h3 className="subtitle">WEB DÉVELOPPEUR</h3>
    </div>

    <div className="navigation-container">
        
        <h3 className="navigation-title">Navigation</h3>
        
        <div className="links-container">

       
            <div className="link" >
            <Link className="test" to="/about">
                <img className="svg" src="./images/3.svg" alt="A propose" />
                <span>À PROPOS</span>
            </Link>
            </div>

            <div className="link" >
                <img className="svg" src="./images/1.svg" alt="Projets" />
                <span>MES PROJETS</span>
            </div>

            <div className="link" >
                <img className="svg" src="./images/4.svg" alt="CV" />
                <span>MON CV</span>
            </div>

            <div className="link" >
                <img className="svg" src="./images/5.svg" alt="Prestations" />
                <span>MES PRESTATIONS</span>
            </div>

            <div className="link" >
                <img className="svg" src="./images/6.svg" alt="réseaux sociaux" />
                <span>MES RÉSEAUX</span>
            </div>

            <div className="link" >
                <img className="svg-contact" src="./images/2.svg" alt="Contact" />
                <span>ME CONTACTER</span>
            </div>
        </div>
    </div>

</main>

<footer></footer>

</body>
       </>

    )
}

export default memo(HomePage)