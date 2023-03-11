import { memo } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss"
import { motion } from "framer-motion";
import config from "./motion.config";

const ServicesPage = () => {


    return (

        <motion.section className="container services" {...config.containerAnimation}>
        <div className="header-regular">
            <Header title="MES SERVICES" />
            </div>

            <div className="about">
                <main className="about-main">

                    <section className="service-section">
                        <h2 className="about-subtitle">Mes différentes prestations :</h2>
                    </section>
                        
                    <section className="service-section">

                        <p className="about-text">
                        Création de site Web et/ou Web Mobile.
                        </p>
                    
                    </section>


                    <section className="service-section">

                        <p className="about-text">
                        Revue de code (debug, optimisation SEO, algorithmique, architechture projet...).
                        </p>

                    </section>



                    <section className="service-section">
                        <p className="about-text">
                        Intégration de système tiers sur site/application (Ajout d'un système de paiement, gestion de base de données, connexion via services tiers (google, spotify...))      
                        </p>

                    </section>


                    <section className="service-section">

                        <p className="about-text">Conseil en UI/UX et design (optimisation expérience utilisateur et recherche de design..)</p>

                    </section>

   
                    <section className="service-section">

                        <p className="about-text">Maintenance de site (Mise à jour de la sécurité, des plugins du CMS...)</p>

                    </section>


                    <section className="service-section">

                        <p className="about-text">
                            Les projets pouvant différer en terme de taille, de complexité, et de temps requis à sa réalisation,
                            les tarifs vous seront communiqué après établissement d'un devis personnalisé.
                        </p>
                    </section>

                    <section className="service-section">

                        <p className="about-text">Ces services sont présentés à titre informatif, si vous avez un projets en tête 
                        qui ne figure pas sur la liste, n'hésitez pas à me contacter afin que nous échangions à ce sujet.
                        Je suis ouvert à tout type de proposition. 
                        </p>
                    </section>



                
                </main>
            </div>

        </motion.section>

    )
}

export default memo(ServicesPage)