import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className='bg-dark container-fluid text-white text-center'>

      <div className=''>
        <h1 className='display-1 py-4'>Pokemons</h1>
        <PokemonList/>
      </div>
    </div>
  );
}

export default App;