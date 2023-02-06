import PokemonImg from "./PokemonImg";

function Pokemon({pokemon}) {

    return (
        <div className="">
            <h2>{pokemon.name}</h2>
            <PokemonImg pokemon={pokemon} />
        </div>
    )

}

export default Pokemon;