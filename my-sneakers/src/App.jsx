import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer bienvenida="¡Bienvenido a My Sneakers!" />
        </div>
    );
}

export default App;

