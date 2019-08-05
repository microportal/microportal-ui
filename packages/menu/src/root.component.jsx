import React from 'react'
import {Provider} from 'react-redux'

import MicroportalMenu from './MicroportalMenu.jsx'

class RootMenuComponent extends React.Component {

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
                <MicroportalMenu globalEventDistributor={this.state.globalEventDistributor}/>
            </Provider>
        )
    }
}

export {RootMenuComponent}
