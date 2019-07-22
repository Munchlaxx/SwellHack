import React, { Component } from 'react';


// Mui Stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export class NavBar extends Component {
    render() {
        return (
            <AppBar>
                
                <Toolbar className="nav-container">
                    <Typography variant="h6" noWrap>
                        Swell Hack
                    </Typography>

                </Toolbar>

            </AppBar>

        )
    }
}

export default NavBar
