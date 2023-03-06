import { memo } from "react";
import { Link } from "react-router-dom";
import './styles.scss';


const HomePage = () => {


    return (

        <section className="homepage">
    <header className="header-homepage">

    <h2 className="header__title">BIENVENUE !</h2>
    <img className="photo" src="./images/jonathan-no-background.png" alt="photo jonathan" />

</header>

<main className="main-homepage">

    <div className="title-container">
        <h1 className="title">JONATHAN DEVRED</h1>
        <h3 className="main-subtitle">WEB DÉVELOPPEUR</h3>
    </div>

    <div className="navigation-container">
        
        <h3 className="navigation-title">Navigation</h3>
        
        <div className="links-container">

       
            <div className="link" >
            <Link className="link-navigation" to="/about">
                <img className="svg" src="./images/3.svg" alt="A propose" />
                <span>À PROPOS</span>
            </Link>
            </div>

            <div className="link" >
            <Link className="link-navigation" to="/projets">
                <img className="svg" src="./images/1.svg" alt="Projets" />
                <span>MES PROJETS</span>
            </Link>
            </div>

            <div className="link" >
            <Link className="link-navigation" to="/cv">
                <img className="svg" src="./images/4.svg" alt="CV" />
                <span>MON CV</span>
            </Link>
            </div>

            <div className="link" >
            <Link className="link-navigation" to="/services">
                <img className="svg" src="./images/5.svg" alt="Services" />
                <span>MES SERVICES</span>
            </Link>
            </div>

            <div className="link" >
            <Link className="link-navigation" to="https://linktr.ee/jdvrd" target="_blank" rel="noopener noreferrer">
                <img className="svg" src="./images/6.svg" alt="réseaux sociaux" />
                <span>MES RÉSEAUX</span>
            </Link>
            </div>

            <div className="link" >
            <Link className="link-navigation" to="/contact">
                <img className="svg-contact" src="./images/2.svg" alt="Contact" />
                <span>ME CONTACTER</span>
            </Link>
            </div>
        </div>
    </div>

</main>       
</section>
    )
}

export default memo(HomePage)