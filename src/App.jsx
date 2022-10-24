import './App.css'
import { people } from './data'
import Card from './Card'

function App() {
  return (
    <main className="App">
      {people.map(person => (
        <Card key={person.id} person={person} />
      ))}
    </main>
  )
}

export default App
