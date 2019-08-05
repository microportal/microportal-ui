import {createStore} from 'redux'

const initialState = {
    menus: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_MENU':
            return {...state, menus: action.payload}
        default:
            return state
    }
}

export const storeInstance = createStore(reducer)
