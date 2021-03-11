interface IDefaultState {}

const defaultState: IDefaultState = {}

const pokemonReducer = (
	state: IDefaultState = defaultState,
	action: any
): IDefaultState => {
	return state
}
export default pokemonReducer
