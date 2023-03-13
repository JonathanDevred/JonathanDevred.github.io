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
                    <p className="subtitle">Vous retrouverez ici les différents projets que j'aie pu mener, personnels ou non : </p>
                    <section className="general-section">
                        <h2 className="general-subtitle">Projets terminés :</h2>
                        
                        <div className="projects-link">
                        <label>
                        <a href="../../projects/IMC/index.html">
                        <img className="project-img" src="/images/imc.png" alt="Projet IMC" />
                        <p className="link-text">Calculateur d'IMC</p>
                        </a>
                        </label>

                        <label>
                        <a href="../../projects/Kultur'Kwizz/index.html">
                        <img className="project-img" src="/images/kultur.png" alt="Projet Kultur'Kwizz" />
                        <p className="link-text">Kultur'Kwizz</p>
                        </a>
                        </label>
                        </div>

                    </section>

                    <section className="general-section">
                        <h2 className="general-subtitle">Projets en cours :</h2>
                        
                        <div className="projects-link">
                        <label>
                        <p className="link-text">La bibliothèque fantastique de Maggie</p>
                        
                        <p>Lien à venir</p>
                        </label>
                        </div>

                    </section>

                
                </main>
            </div>
   
    </motion.section>

    )
}

export default memo(ProjectsPage)