import { memo } from "react";
import { motion } from "framer-motion";
import config from "./motion.config";

const ErrorPage = () => {


    return (

        <motion.section className="container errorpage" {...config.containerAnimation}>
        <h1>404</h1>
       </motion.section>

    )
}

export default memo(ErrorPage)