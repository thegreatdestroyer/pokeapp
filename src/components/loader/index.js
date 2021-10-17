import React from 'react';
import './index.css';


const Loader = () => {
    return (
        <div className="overlay">
           <div className="loader">
                <img className="loader-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="loader" />
                <span>Loading...</span>  
           </div>       
        </div>
    )
};

export default Loader;