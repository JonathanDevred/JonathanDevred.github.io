import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.scss"


const Header = (props) => {

    return (
            <section className='header-container'>

            <div className='home'>
            <Link to="/">
            <img className="svg-home" src="./images/home.svg" alt="A propose" />
            </Link>
            </div>

            <h1 className='title'>{props.title}</h1>


            </section>
    )

}

Header.propTypes = {
    title: PropTypes.string
};

export default memo(Header); 