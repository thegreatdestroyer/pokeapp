import { getPictureId } from '../utils/getPictureId'

class PokemonsService {
    getAll = async (limit, offset) => {
        try {
            const response = await fetch(`/api/v2/pokemon?limit=${limit}&offset=${offset}`);

            const pokemons = await response.json();

            const newResults = pokemons.results.map(({ name, url }) => {
                const matched = url.match(/\/[0-9]+\//g);
                const splitted = matched[0].split('/');
                const id = splitted[1];

                const imgId = getPictureId(id);
                const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgId}.png`;

                return {
                    name,
                    url,
                    imgSrc,
                }
            });
            
            const newPokemons = { ...pokemons, results: newResults };
            return newPokemons;
        }

        catch (error) {
            console.error(`Ошибка, не удалось получить список покемонов: ${error.message}`);
        }
    }
}

const pokemonsService = new PokemonsService();

export default pokemonsService;