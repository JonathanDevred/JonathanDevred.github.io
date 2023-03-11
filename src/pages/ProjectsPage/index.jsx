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

       <div className="general">
                <main>

                    <section className="general-section">
                        <h2 className="general-subtitle">Projets terminés :</h2>
                        
                        <p className="general-text">
                        IMC calculator
                        </p>

                        <p>
                        Kultur'Kwizz
                        </p>

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