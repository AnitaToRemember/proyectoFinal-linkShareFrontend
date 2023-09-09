import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'

function App() {

  return (
    <main>
      <h1>ShareIn</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </main>
  )
}

export default App
