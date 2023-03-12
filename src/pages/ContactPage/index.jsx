import React, { useEffect, memo } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
import config from "./motion.config";
import "./styles.scss";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <motion.section className="container contact" {...config.containerAnimation}>
     
      <div className="header-regular">
        <Header title="ME CONTACTER" />
      </div>


      <section className="general general-section">
      <main className="general-main">
          <p className="general-text">
            Si vous souhaitez me contacter pour discuter d'un projet de développement web,
            proposer du travail ou si vous avez des questions,
            n'hésitez pas à utiliser le formulaire de contact ci-dessous (une page de courrier électronique s'ouvrira).
          </p>

          <p className="general-text-alt">Vous préférez d'autres   ?</p>

          <ul>
            <li className="option">
              Laissez-moi un message sur LinkedIn :
              <Link className="linked-in" to="https://www.linkedin.com/in/jonathan-devred/" target="_blank">
                Cliquez ici
              </Link>
            </li>

            <li className="option">Appelez-moi ou écrivez-moi au : <span className="phone-number">06.03.26.83.81</span> </li>
            <li className="option-joke">
              Vous pouvez aussi tenter d'envoyer un pigeon voyageur (mais le temps de réponse risque d'être long...)
            </li>
          </ul>

          <p className="general-text">Dans tous les cas, je serai heureux de vous répondre dans les plus brefs délais. </p>
        </main>
      </section>

      <section className="general">
        <ContactForm className="form" />
      </section>
    </motion.section>
  );
};

export default memo(ContactPage);
