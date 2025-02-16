import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Sneakers
                </Typography>

                <Button color="inherit">NIKE</Button>
                <Button color="inherit">ADIDAS</Button>
                <Button color="inherit">VANS</Button>

                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
