import { memo } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss"

const ServicesPage = () => {


    return (

        <>
        <div className="header-regular">
        <Header title="MES SERVICES" />
        </div>
        </>

    )
}

export default memo(ServicesPage)