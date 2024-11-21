import style from "styled-components";

const SDiv = style.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;
    max-width: 250px;

    img{
        width: 100%;
        height: 140px;
        border-radius: 5px;
    }
`;

const SDivInfo = style.div`
    padding: 15px;

    p{
        font-size: 15px;
    }

    span{
        font-size: 20px;
        font-weight: bold;
    }
`;

const SSection = style.section`
    overflow: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 230px;
    gap: 20px;
`;

function Product({ product, onClick }) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <img
                src={product.image}
                alt={product.name}
            />
            <SDivInfo className="card-body">
                <p className="card-title text-center text-dark">{product.name}</p>
                <p className="text-center text-success fw-bold">
                    R$ {product.price}
                </p> {/* Exibe o preço em negrito e com cor verde */}
            </SDivInfo>
        </SDiv>
    )
}


function Products({ products, onClick, isLoading = false }) {
    return (<SSection>
        {isLoading ?
            "Carregando..."
            : products.length > 0
                ? products.map((product) => (
                    <Product key={product.id} product={product} onClick={onClick}></Product>
                )) : "Nenhum Produto Encontrado!"}
    </SSection>
    )
}

export default Products;
