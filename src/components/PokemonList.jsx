import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between aling-items-center'>
            <div>
                <p>Page: </p>
            </div>
            <div>
                <button className='btn btn-secondary'
                    onClick={()=>{
                        props.setPage(props.previusPage)
                    }}
                >
                    Previus
                </button>
                <button className='btn btn-primary'
                    onClick={()=>{
                        props.setPage(props.nextpage)
                    }}
                >
                    Next
                </button>
            </div>
        </header>
    )
}

function PokemonList() {

    const [pokemons, setPokemons] = useState([]);

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

    const [nextpage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

    const [previusPage, setPreviusPage] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(page);
            const data = await response.json();
            setPokemons(data.results);
            setNextPage(data.next);
            setPreviusPage(data.previous);
        };

        fetchData();
        setLoading(false);
    }, [page]);
    return (
        <div className="row">
            <NavPage nextpage={nextpage} setPage={setPage} previusPage={previusPage} />
            {loading ? <div>Loading</div> :
            pokemons.map(pokemon => {
                return (
                    <div className='col-md-3 text-center' key={pokemon.url}>
                        <Pokemon pokemon={pokemon} />
                    </div>
                );
            })}
            <NavPage nextpage={nextpage} setPage={setPage} previusPage={previusPage} />
        </div>
    );
}

export default PokemonList;