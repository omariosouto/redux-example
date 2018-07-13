// Código do Redux ======
// import { createStore } from 'redux'

const createStore = (reducer) => {
	let state
	const subscribers = []
	
	const dispatch = (action) => {
		state = reducer(state, action)	
		subscribers.forEach((func) => {
			func()
		})
	}
	const subscribe = (func) => {
		subscribers.push(func)
	}
	
	dispatch({})
	
	return {
		getState: () => state,
		dispatch,
		subscribe
	}
}

// Código de Aplicação ======
const mensagens = (state = { mensagensNoStateDaStore: [] }, action) => {
	if(action.type === 'NEW_MESSAGE') {
		state = {
			mensagensNoStateDaStore: [...state.mensagensNoStateDaStore, action.mensagensNova]
		}
		return state
	}
	
	return state
}

// Criando uma Store
window.store = createStore(mensagens)


