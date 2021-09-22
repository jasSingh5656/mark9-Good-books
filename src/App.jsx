import { useState } from 'react'

const adventure = ['harry potter', 'disney land', 'into the earth']
const horror = ['resident evil', 'Ghost', 'Dont breathe']
const scifi = ['up and up', 'asteroids', 'the moom']

function App() {
  const [books, setBooks] = useState([])

  return (
    <div className="App">
      <button onClick={() => setBooks(adventure)}>adventure</button>
      <button onClick={() => setBooks(horror)}>horror</button>
      <button onClick={() => setBooks(scifi)}>scifi</button>
      <ul>
        {books.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App
