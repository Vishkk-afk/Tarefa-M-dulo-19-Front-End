import React from 'react'
import styled from 'styled-components'

// Estilos com styled-components
const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`

const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #333;
`

const ProductPrice = styled.p`
  margin: 0 0 16px 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
`

// Botão com cor dinâmica baseada na prop "adicionado"
const AddButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: ${props => props.adicionado ? '#198754' : '#6c757d'};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

const CardProduto = ({ nome, preco, adicionado, onToggle }) => {
  return (
    <CardContainer> 
      <ProductName>{nome}</ProductName>
      <ProductPrice>{preco}</ProductPrice>
      <AddButton adicionado={adicionado} onClick={onToggle}>
        {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </AddButton>
    </CardContainer>
  )
}

export default CardProduto