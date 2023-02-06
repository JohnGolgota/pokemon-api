import { useEffect, useState } from 'react'
function PokemonImg({pokemon}){

    const [svg, setSvg] = useState([]);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setSvg(data.sprites.front_default);
        };
        
        fetchData();
        setLoading(false);
    })

    if(loading){
        return <div>Loading...</div>
    } else {
        return (
            <img src={svg} alt={pokemon.name} />
        )
    }

}

export default PokemonImg;