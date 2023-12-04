import './App.css'
import Card from './components/Card'
import interstellar from './assets/interstellar.jpeg'
import oppenheimer from './assets/oppenheimer.jpg'
import thedarkknight from './assets/thedarkknight.jpg'

export default function App() {
  return (
    <div className="app">
      <Card link={interstellar} count={5} />
      <Card link={oppenheimer} count={3} />
      <Card link={thedarkknight} count={4} />
    </div>
  )
}
