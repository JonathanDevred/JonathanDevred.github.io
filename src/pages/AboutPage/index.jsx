import { memo } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss"

const AboutPage = () => {


    return (

       <section>
        <div className="header-regular">
        <Header title="A PROPOS DE MOI"/>
        </div>

            <div className="about">
            <main className="about-main">

                <section className="about-section">
                <h2 className="about-subtitle">Qui suis-je ?</h2>
                
                <p className="about-text">
                Mon nom est Jonathan Devred, un développeur web de 29 ans. Après près de 10 ans d'expérience dans le commerce et la logistique, j'ai décidé de me reconvertir dans le développement web.
                J'ai suivi une formation à l'école O'Clock pour acquérir les compétences nécessaires pour travailler dans ce domaine passionnant. Depuis mon enfance, je suis passionné d'informatique et j'aime explorer les possibilités 
                créatives qu'offre le développement. Je suis curieux et rigoureux dans mon travail, 
                ce qui me permet de résoudre les problèmes de manière efficace et de créer des solutions innovantes.
                </p>

                <p className="about-text">
                Bien que je sois un développeur junior, j'ai une soif d'apprendre et de participer à des projets passionnants pour
                améliorer mes compétences et contribuer au succès de l'équipe.</p>
                </section>

                <section className="about-section">
                <h2 className="about-subtitle">Pourquoi le dévéloppement web ?</h2>
                
                <p className="about-text">
                    J'ai grandi à la naissance d'Internet, et j'ai toujours été fasciné par cette technologie qui offre des possibilités infinies.
                    J'ai toujours aimé savoir et comprendre comment fonctionnent les choses qui m'entourent,
                    et cette curiosité m'a conduit à m'intéresser à l'informatique et à explorer les possibilités créatives qu'offre
                    le développement web. 
                </p>
                    
                <p className="about-text">
                    Bien que je n'aie pas eu la chance de faire des études dans ce domaine, 
                    j'ai toujours été fasciné par la capacité de créer autant de choses avec juste du code.
                    C'est pourquoi j'ai décidé de me reconvertir dans ce domaine et de suivre une formation à l'école O'Clock pour acquérir 
                    les compétences nécessaires pour travailler en tant que développeur web. Je suis heureux de pouvoir exprimer ma créativité et ma passion pour l'informatique à travers le développement web,
                    et j'ai hâte de continuer à apprendre et à évoluer dans ce domaine passionnant.
                </p>
                </section>

                <section className="about-section">
                <h2 className="about-subtitle"> Quelle stack technique ?</h2>

                <p className="about-text"> 
                En tant que développeur, j'utilise une gamme complète d'outils et de technologies pour créer des applications web performantes
                et de qualité supérieure pour mes clients.
                </p> 
                
                <p className="about-text"> 
                Pour la partie front-end, j'utilise les langages HTML, CSS et JavaScript 
                pour créer des interfaces utilisateur attrayantes et réactives. J'utilise également la bibliothèque JavaScript React
                pour créer des composants réutilisables et des interfaces utilisateur dynamiques. 
                </p>

                <p className="about-text"> 
                Pour la partie back-end, 
                j'utilise l'environnement d'exécution JavaScript Node.js pour le développement de serveurs et d'applications web. 
                J'utilise également PostgreSQL, une base de données relationnelle open source, pour stocker et gérer les données 
                de mes applications. 
                </p>

                <p className="about-text"> 
                Je suis également compétent dans l'utilisation de Git et GitHub pour le contrôle de version et
                le développement collaboratif, ainsi que des outils de test tels que Jest pour garantir la qualité du code.
                Mon engagement envers l'excellence et la qualité se reflète également dans l'utilisation d'outils utiles tels que Insomnia,
                qui facilite le processus de test d'API.
                </p>
                </section>

                <section className="about-section">
                <h2 className="about-subtitle">Et pour la suite ?</h2>

                <p className="about-text">
                Pour l'avenir, mon objectif est de travailler sur une variété de projets différents afin d'élargir mes connaissances
                et de devenir un développeur plus complet et compétent. Je suis motivé à apprendre de nouveaux langages de programmation,
                de nouvelles techniques et de nouvelles approches de développement pour résoudre des problèmes complexes.
                </p>

                <p className="about-text">
                Je suis également déterminé à améliorer continuellement mes compétences pour assurer des résultats de haute qualité
                pour mes clients. Travailler sur une variété de projets me permettra d'acquérir une expérience pratique et de devenir 
                un développeur plus compétent, capable de relever tous les défis de développement web qui se présentent.
                </p>
                </section>

            </main>
            </div>
        </section>

    )
}

export default memo(AboutPage)