import { Dispatch } from "redux";

export const GetPokemon = () => async (dispatch: Dispatch) => {
	try {
		dispatch(action: {
      type: "LOADING_POKEMON"
    })
    
	} catch (e) {}
}
