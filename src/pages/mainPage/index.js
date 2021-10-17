import React from 'react';
import Header from '../../components/header';
import PokemonsBlocks from '../../components/pokemons-blocks';
import './index.css'

const MainPage = () => {

    return (
        <div>
            <Header />

            <PokemonsBlocks />
        </div>
    )
}

export default MainPage;
