

export default class OrdoService {

 

  // static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

/*   static getPokemons() {
    if(this.isDev) {
      return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      resolve(this.pokemons);
    });
  } */

  static getOrdonnance(id) {
    async () => {
      try {
        const response = await axios.get(`https://frozen-dawn-43758.herokuapp.com/ordonnances/${id}`);
        this.setState({ ordonnances: response.data })
      } catch(error) {
        this.setState({ error })
      }
    }
   
  }

  /* static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {
      const { id } = pokemon;
      const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
      this.pokemons[index] = pokemon;
      resolve(pokemon);
    }); 
  }

  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {    
      const { id } = pokemon;
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
      resolve({});
    }); 
  }

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    delete pokemon.created;

    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {    
      this.pokemons.push(pokemon);
      resolve(pokemon);
    }); 
  }

  static searchPokemon(term: string): Promise<Pokemon[]> {
    if(this.isDev) {
      return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then(response => response.json())
      .catch(error => this.handleError(error));
    }

    return new Promise(resolve => {    
      const results = this.pokemons.filter(pokemon => pokemon.name.includes(term));
      resolve(results);
    });

  } */

  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }

  static handleError(error) {
    console.error(error);
  }
}