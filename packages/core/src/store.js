import {createStore} from 'redux'

const initialState = {
    services: [],
    alerts: [],
    pageTitle: 'Portal',
    menuOpen: true,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ALERT':
            return {...state, alerts: [...state.alerts, action.payload]}
        case 'LOAD_SERVICES':
            return {...state, services: action.payload}
        case 'MENU_OPEN':
            console.log(action)
            return {...state, menuOpen: true}
        case 'MENU_CLOSE':
            return {...state, menuOpen: false}
        case 'SET_PAGE_TITLE':
            return {...state, pageTitle: action.payload}
        default:
            return state
    }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const storeInstance = createStore(reducer, devTools)
