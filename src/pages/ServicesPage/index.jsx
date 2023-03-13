import { memo } from "react";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import config from "./motion.config";
import "./styles.scss"

const ServicesPage = () => {


    return (

        <motion.section className="container services" {...config.containerAnimation}>
        <div className="header-regular">
            <Header title="MES SERVICES" />
            </div>

            <div className="general">
                <main className="general-main">

                    <section className="general-section">
                        <h2 className="general-subtitle">Mes différentes prestations :</h2>
                        
                        <p className="services-text">
                        Création de site Web et/ou Web Mobile.
                        </p>               

                        <p className="services-text">
                        Revue de code (debug, optimisation SEO, algorithmique, architechture projet..).
                        </p>

                        <p className="services-text">
                        Intégration de système tiers sur site/application.</p>
                        <p className="services-subtext">(Ajout d'un système de paiement, gestion de base de données, 
                        connexion via services tiers</p> 
                        <p className="services-subtext"> (google, spotify..)).</p>

                        <p className="services-text">Conseil en UI/UX et design</p> 
                        <p className="services-subtext">(optimisation expérience utilisateur et recherche de design..).</p>

                        <p className="services-text">Maintenance de site</p>
                        <p className="services-subtext">(Mise à jour de la sécurité, des plugins du CMS...).</p>

                        <p className="services-text">
                            Les projets pouvant différer en terme de taille, de complexité, et de temps requis à sa réalisation,</p>
                        <p className="services-subtext"> les tarifs vous seront communiqué après établissement d'un devis personnalisé.</p>


                        <p className="services-text">Ces services sont présentés à titre informatif, si vous avez un projet en tête 
                        qui ne figure pas sur la liste,</p> 
                        <p className="services-subtext">n'hésitez pas à me contacter afin que nous échangions à ce sujet.
                        Je suis ouvert à tout type de proposition. 
                        </p>
                    </section>



                
                </main>
            </div>

        </motion.section>

    )
}

export default memo(ServicesPage)