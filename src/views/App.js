import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cart from "../components/cart";
import Product from "../components/products";
import { apiGetProducts, apiSubmitCart } from "../services/api"; // Importa as funções
import '../assets/App.css'

function App() {
    const [productsLoading, setProductsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(false);

    async function getProducts() {
        setProductsLoading(true);
        console.log(await apiGetProducts())
        setProducts(await apiGetProducts());

        setProductsLoading(false);
    }

    async function submitCart() {
        setCartLoading(true);
        await apiSubmitCart();
        setCart([]);
        setCartLoading(false);

        getProducts();
    }

    function setProduct(product, change) {
        const products = cart.filter(({ id }) => {
            return id !== product.id;
        });

        product.units += change;
        if (product.units > 0) {
            setCart(() => [...products, product]);
        } else {
            setCart(() => [...products]);
            setProducts((LastProducts) => [...LastProducts, product]);
        }
    }

    function addProduct(product) {
        product.units = 1;
        setCart(() => [...cart, product]);

        setProducts(() => products.filter(({ id }) => {
            return id !== product.id;
        }));
    }

    useEffect(() => {
        getProducts();
    }, []);


    const SMain = styled.main`
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr;
    `
    return(
        <SMain>
            <Cart
                products={cart}
                onchange={setProduct}
                onClick={submitCart}
                isLoading={cartLoading}
            />
            <Product
                products={products}
                onClick={addProduct}
                isLoading={productsLoading}
            />
        </SMain>
    );

}

export default App;
