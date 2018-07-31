import React from 'react'

const App = () => {
  const numeros = [1, 2, 3, 4, 5, 6]
  const nome = 'Bruno'
  const alerta = () => {
    alert('Aloo')
  }
  return (
    <div>
      <h1>{nome}</h1>
      <button onClick={alerta}>Alerta</button>
      <ul>
        {numeros.map(e => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default App
