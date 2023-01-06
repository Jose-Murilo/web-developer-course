import { useState, useEffect } from 'react'
import './App.css'

export function App() {
  // const name = useState('Murilo');
  // const [name, setName] = useState('Murilo');
  // const [count, setCount] = useState(0);
  const [text1, setText] = useState('')
  const [text2, setText2] = useState('')
  const [data, setData] = useState('')
  // let count = 0

  useEffect(() => {
    if (text2) {
      fetch(`https://api.github.com/users/${text2}`)
        .then(response => response.json())
        .then(data => setData(data))
    }
  }, [text2])

  return (
    <div className="container">
      {/* <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
      <p>Número: {count}</p>
      <button onClick={() => {
        //  count += 1
         setCount(count + 1)
         console.log(count);
      }}>Clicar</button> */}

      <form action="">
        <p>Palavra: {text1}</p>
        <p>Palavra: {text2}</p>
        <input type="text" placeholder='Digite alguma coisa' onChange={(event) => setText((event.target.value))} />
        <button onClick={(event) => {
          event.preventDefault()
          setText2(text1)
        }}>Enviar</button>
      </form>

      <section>
        <h2>{data.name}</h2>
        <img src={data.avatar_url} alt="" />
        <p>{data.bio}</p>
      </section>
    </div>
  )
}


// Hooks = renderiza na tela