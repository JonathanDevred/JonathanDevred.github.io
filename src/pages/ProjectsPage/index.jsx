import { memo } from "react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import config from "./motion.config";
import "./styles.scss"


const ProjectsPage = () => {


    return (

        <motion.section className="container project" {...config.containerAnimation}>
        <div className="header-regular">
        <Header title="MES PROJETS" />
       </div>

       <div className="general">
                <main>

                    <section className="general-section">
                        <h2 className="general-subtitle">Projets terminés :</h2>
                        
                        <div className="projects-link">
                        <label>
                        <a href="../../projects/IMC/index.html">
                        <img className="project-img" src="/images/imc.png" alt="Projet IMC" />
                        <p className="general-text">Calculateur d'IMC</p>
                        </a>
                        </label>

                        <label>
                        <a href="../../projects/Kultur'Kwizz/index.html">
                        <img className="project-img" src="/images/kultur.png" alt="Projet Kultur'Kwizz" />
                        <p className="general-text">Kultur'Kwizz</p>
                        </a>
                        </label>
                        </div>

                    </section>

                    <section className="general-section">
                        <h2 className="general-subtitle">Projets en cours :</h2>
                        
                        <p className="general-text">
                        La bibliothèque fantastique de Maggie
                        </p>

                    </section>

                
                </main>
            </div>
   
    </motion.section>

    )
}

export default memo(ProjectsPage)