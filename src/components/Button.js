import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Button(props) {
    return (
        <div className="portfolio-item">
            <Link to='/profiles/userprofile' className="buttonProfile">
                <img src={props.Image} alt="Default Image" />
                <span className="username">{props.Name}</span>
            </Link>
        </div>
    );
}

export default Button;