import React from 'react'
import {connect} from 'react-redux'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import StarIcon from '@material-ui/icons/Star'
import {Link, MenuItem} from '@material-ui/core'
import MenuList from '@material-ui/core/MenuList'

class MicroportalMenu extends React.Component {

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        return (
            <div>
                <MenuList>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <Link href={'/#/about'}>
                        <MenuItem>
                            <ListItemIcon>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Services"/>
                        </MenuItem>
                    </Link>
                </MenuList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menus: state.menus,
    }
}

export default connect(mapStateToProps, null)(MicroportalMenu)
