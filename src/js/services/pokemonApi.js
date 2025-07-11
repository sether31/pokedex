export async function pokemonData(character){
  try{
    const api = `https://pokeapi.co/api/v2/pokemon/${character}`;
    const data = await fetch(api);
    if(!data){
      throw new Error('Network error');
    }
    const pokemon = await data.json();
    return console.log(pokemon);
  } catch(error){
    console.log('Error: ' + error);
  }
}