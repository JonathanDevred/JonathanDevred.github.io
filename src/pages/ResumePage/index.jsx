import { memo } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss"

const ResumePage = () => {
  return (
    <>
      <div className="header-regular">
        <Header title="MON CURRICULUM VITAE" />
      </div>

      <a className="cv-download-link" href="public/images/cv.pdf" download> Cliquez ici pour télécharger le CV (PDF) </a>


      <div className="cv-container">

          <img className="cv" src="public/images/cv.png" alt="cv de Jonathan Devred" />
        
      </div>
    </>
  );
};

export default memo(ResumePage);