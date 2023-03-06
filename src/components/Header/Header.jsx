import React, { memo } from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {

    return (
            <h1 className='title'>{props.title}</h1>
        
    )

}

Header.propTypes = {
    title: PropTypes.string
};

export default memo(Header); 