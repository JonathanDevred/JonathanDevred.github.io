import React, { useEffect, memo } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Header from "../../components/Header/Header";

const ContactPage = () => {

    return (
       <section className="page contact-page">

        <div className="header-regular">  
            <Header  title="ME CONTACTER"/>
        </div>
        <p> Si vous souhaitez me contacter pour discuter d'un projet de développement web, 
            proposer du travail ou si vous avez des questions, 
            n'hésitez pas à utiliser le formulaire de contact ci-dessous (une page de courrier électronique s'ouvrira).</p>

        <p>Vous préférez d'autres alternatives ?</p>

        <ul>
            <li>Laissez moi un message sur LinkedIn : </li>
            <li>Ou appelez moi : </li>
            <li>Vous pouvez aussi tenter d'envoyer un pigeon voyageur (mais le temps de réponse risque d'être long.)</li>
        </ul>

            <p>Dans tous les cas, je serai heureux de vous répondre dans les plus brefs délais. </p>


        <ContactForm />
       </section>
    )
}

export default memo(ContactPage);
