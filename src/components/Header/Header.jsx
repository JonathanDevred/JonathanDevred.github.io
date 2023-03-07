import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './styles.scss';

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='header-container'>
      <div className='burger' onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <h1 className='title'>{props.title}</h1>

    <div>
      <Menu isOpen={isOpen} right>
        <Link to='/' className='menu-item'>
          ACCUEIL
        </Link>
        <Link to='/about' className='menu-item'>
          À PROPOS
        </Link>
        <Link to='/projects' className='menu-item'>
          PROJETS
        </Link>
        <Link to='/cv' active={true} className='menu-item'>
          CV
        </Link>
        <Link to='/services' className='menu-item'>
          SERVICES
        </Link>
        <Link to='/medias' className='menu-item'>
          MÉDIAS
        </Link>
        <Link to='/contact' className='menu-item'>
          CONTACT
        </Link>
      </Menu>
    </div>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default memo(Header);
