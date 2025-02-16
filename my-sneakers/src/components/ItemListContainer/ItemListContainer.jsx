import React from 'react';
import { Container, Typography } from '@mui/material';

function ItemListContainer({ bienvenida }) {
    return (
        <Container sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h4" color="textPrimary">
                {bienvenida}
            </Typography>
        </Container>
    );
}

export default ItemListContainer;
