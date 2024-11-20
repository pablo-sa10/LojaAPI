import React, { useEffect, useState } from 'react';
import api from '../services/api';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                let produtos = response.data.products
                console.log(produtos);
                setProducts(produtos);
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    return (
        <section className='container'>
            <h1 className=''>Loja do Pablo</h1>
            {/* <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul> */}
        </section>
    );
}

export default App;
