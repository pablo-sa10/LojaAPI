import styled from "styled-components";

const SDiv = style.div`
    height: 260px;
`

function Product({ product, onClick }) {
    return (
        <div onClick={() => onClick(product)}>
            <img
                src={product.image}
                alt={product.name}
                className="img-fluid mb-3 rounded"
                style={{ maxHeight: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title text-center text-dark">{product.name}</h5>
                <h6 className="text-center text-success fw-bold">
                    R$ {product.price}
                </h6> {/* Exibe o preço em negrito e com cor verde */}
            </div>
        </div>
    )
}



function Products({ products, onClick, isLoading = false }) {
    <section
        className="col-md-3 mx-2 col-12 card my-4 p-3 shadow-sm border-0"
        style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }} // Cor clara no fundo
    >{isLoading ? "Carregando..." : products.length > 0 ? products.map((product) => (
        <Product key={product.id} product={product} onClick={onClick}></Product>
    )) : "Nenhum Produto Encontrado!"}
    </section>
}

export default Products;
