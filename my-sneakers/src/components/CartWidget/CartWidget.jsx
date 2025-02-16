import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    const cartCount = 5;

    return (
        <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default CartWidget;
