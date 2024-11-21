import styled from "styled-components";
import Button from "./button";

const SLi = styled.li`
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 8px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space between;
    align-items: center;
`;

const SDivInfo = styled.div`
    p{
        font-size: 16px;
        margin-bottom: 2px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const SDivUnits = styled.div`
    width: 86px;
    display: flex;
    justify-contetn: space-between;
    align-items: center;

    button{
        padding: 5px 10px;
        border: 1px solid #fff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const SSection = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px;
`;

const SUl = styled.ul`
    list-style-type: none;
`;

function CartProduct({product, onChange, isLoading}){
    return (
        <SLi>
            <SDivInfo>
                <p>{product.name}</p>
                <span>{product.price}</span>
            </SDivInfo>
            <SDivUnits>
                <button disabled={isLoading} onClick={() => onChange(product, -1)}>
                    -
                </button>
                <p>{product.units}</p>
                <button disabled={isLoading} onClick={() => onChange(product, +1)}>
                    +
                </button>
            </SDivUnits>
        </SLi>
    );
}

function Cart({products, onchange, onClick, isLoading = false}){
    return (
        <SSection>
            <SUl>
                {products.map((product) => (
                    <CartProduct 
                        key={product.id}
                        product={product}
                        onChange={onchange}
                        isLoading={isLoading}
                    />
                ))}
            </SUl>
            <Button onClick={onClick} isLoading={isLoading}>
                Finalizar Compra
            </Button>
        </SSection>
    );
}

export default Cart;