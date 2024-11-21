import styled from "styled-components";

const SButton  = styled.button`
    cursor: pointer;
    padding: 18px 8px;
    width: 100%;
    color: #fff;
    background-color: #000;
    font-size: 18px;
    border: 0;
    border-radius: 8px;
`;

function Button({children, onClick, isLoading}){
    return (
        <SButton onClick={onClick} disabled={isLoading}>
            {isLoading ? "Carregando..." : children}
        </SButton>
    );
}

export default Button;