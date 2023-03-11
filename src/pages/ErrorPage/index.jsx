import { memo } from "react";
import { motion } from "framer-motion";
import config from "./motion.config";
import './styles.scss'
import { Link } from "react-router-dom";

const ErrorPage = () => {


    return (

        <motion.section className="container errorpage" {...config.containerAnimation}>
        <h1 className="errorpagetitle"><span className="oops">Oops,</span> apparemment vous êtes perdu 🔍🤔</h1>

        <Link className="errorlink" to="/">Cliquez ici pour revenir à l'accueil</Link>
       </motion.section>

    )
}

export default memo(ErrorPage)