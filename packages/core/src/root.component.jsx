import React from 'react'
import {Provider} from 'react-redux'

import Commons from './Commons.jsx'

class RootCoreComponent extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Commons globalEventDistributor={this.state.globalEventDistributor}/>
            </Provider>
        )
    }
}

export {RootCoreComponent}