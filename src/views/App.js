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
            <div className='row'>
                {<div className='col-4 card'>
                    {products.map((product) => (
                        <div className='' key={product.id}>{product.name}</div>
                    ))}
                </div>}
            </div>
        </section>
    );
}

export default App;
