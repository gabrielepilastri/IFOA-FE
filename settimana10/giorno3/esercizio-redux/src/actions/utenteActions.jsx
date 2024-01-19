
const SET_NOME = 'SET_NOME';
const SET_COGNOME = 'SET_COGNOME';
const SET_ETA = 'SET_ETA';

export const setNome = {newName} => {
    return {
        type: SET_NOME,
        payload: newName
    }
}

