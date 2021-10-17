import React, { useEffect, useState } from 'react';
import pokemonsService from '../../services/PokemonsService';
import Pagination from '../pagination';
import Loader from '../loader'
import './index.css';


const PokemonsBlocks = () => {
    const [pokemons, setPokemons] = useState([]);
    const [total, setTotal] = useState(0); 
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const handleUpdateLimit = (newLimit) => {
        setLimit(newLimit);
    };

    const handleUpdateOffset = (newOffset, num) => {
        setActivePage(num);
        setOffset(newOffset);
    };

    useEffect(() => {
        setIsLoading(true);
        pokemonsService.getAll(100, offset)
        .then(pokemons => {
            setPokemons(pokemons.results);
            setTotal(pokemons.count);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [offset]); 


    return (
        <div>
          {isLoading ? ( 
          <Loader />) : ( 
              <>
           <div className="pokemons-blocks">
            {pokemons.map(({ name, imgSrc }) => (
                <div className="pokemon">
                        <img src={imgSrc} alt={name} className="pokemon-image" />
                    <span className="pokemon-name">{name}</span>
                </div>
            ))}
            </div>
            <div>
                <Pagination onUpdateLimit={handleUpdateLimit} 
                onUpdateOffset={handleUpdateOffset}
                 total={total} 
                 limit={limit} 
                 activePage={activePage}/>
            </div> </>
            )}
        </div>
    )
};

export default PokemonsBlocks;