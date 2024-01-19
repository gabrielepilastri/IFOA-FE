import { SET_NOME, SET_COGNOME, SET_ETA } from '../actions/utenteActions'

const initialState = {
    nome: 'Mario',
    cognome: 'Rossi',
    età: '999',
}

const utenteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOME:
            return {
                ...state,
                nome: action.payload
            };
        case SET_COGNOME:
            return {
                ...state,
                cognome: action.payload
            }
        case SET_ETA:
            return{
                ...state,
                età: action.payload
            }
        default:
            return state;
    }
}

export default utenteReducer;