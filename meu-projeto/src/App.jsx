import React, { useState } from 'react'
import CardProduto from './components/CardProduto'

// Dados estáticos dos produtos
const produtos = [
  { id: 1, nome: 'Camiseta', preco: 'R$ 49,90' },
  { id: 2, nome: 'Calça Jeans', preco: 'R$ 129,90' },
  { id: 3, nome: 'Tênis', preco: 'R$ 199,90' },
]

function App() {
  // Estado para controlar quais produtos foram adicionados ao carrinho
  const [adicionados, setAdicionados] = useState({})

  const toggleAdicionado = (id) => {
    setAdicionados(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Produtos</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionado={!!adicionados[produto.id]}
            onToggle={() => toggleAdicionado(produto.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App