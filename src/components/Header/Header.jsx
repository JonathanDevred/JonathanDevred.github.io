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
        <Link to='/general' className='menu-item'>
          À PROPOS
        </Link>
        <Link to='/projects' className='menu-item'>
          MES PROJETS
        </Link>
        <Link to='/cv' className='menu-item'>
          MON CV
        </Link>
        <Link to='/services' className='menu-item'>
          MES SERVICES
        </Link>
        <Link to='https://linktr.ee/rvntch' className='menu-item'>
          MES RÉSEAUX
        </Link>
        <Link to='/contact' className='menu-item'>
          ME CONTACTER
        </Link>
      </Menu>
    </div>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Header);
