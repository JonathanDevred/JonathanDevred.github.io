import { memo } from "react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import config from "./motion.config";


const ProjectsPage = () => {


    return (

        <motion.section className="container project" {...config.containerAnimation}>
        <div className="header-regular">
        <Header title="MES PROJETS" />
       </div>

       <div className="about">
                <main className="about-main">

                    <section className="about-section">
                        <h2 className="about-subtitle">Projets terminés :</h2>
                        
                        <p className="about-text">
                        IMC calculator
                        </p>

                        <p>
                        Kultur'Kwizz
                        </p>

                    </section>

                    <section className="about-section">
                        <h2 className="about-subtitle">Projets en cours :</h2>
                        
                        <p className="about-text">
                        La bibliothèque fantastique de Maggie
                        </p>

                    </section>

                
                </main>
            </div>
   
    </motion.section>

    )
}

export default memo(ProjectsPage)