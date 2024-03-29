import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import {RootMenuComponent} from './root.component.jsx'

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: RootMenuComponent,
    domElementGetter,
})

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props)
}

export function mount(props) {
    return reactLifecycles.mount(props)
}

export function unmount(props) {
    return reactLifecycles.unmount(props)
}

function domElementGetter() {
    return document.getElementById('menu-ui')
}
