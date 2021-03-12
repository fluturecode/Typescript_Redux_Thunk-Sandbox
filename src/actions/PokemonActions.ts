import axios from "axios";
import { Dispatch } from "redux";
import { PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "./PokemonActionTypes";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
	try {
		dispatch(action: {
      type: POKEMON_LOADING
    })
    
    const res = await axios.get( url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch(action: {
      type: POKEMON_SUCCESS,
      payload: res.data
    })
    
	} catch (e) {
    dispatch(action: {
      type: POKEMON_FAIL
    })
  }
}
