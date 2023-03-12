import { memo } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss"
import { motion } from "framer-motion";
import config from "./motion.config";

const ResumePage = () => {
  return (
    <motion.section className="container resume" {...config.containerAnimation}>

      <div className="header-regular">
        <Header title="MON CURRICULUM VITAE" />
      </div>

      <a className="cv-download-link" href="/images/cv.pdf" download> Cliquez ici pour télécharger le CV (PDF) </a>


      <div className="cv-container">

          <img className="cv" src="/images/cv.png" alt="cv de Jonathan Devred" />
        
      </div>
    </motion.section>
  );
};

export default memo(ResumePage);