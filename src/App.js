import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                // setProducts(response.data);
                console.log(response)
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
