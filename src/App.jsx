import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MyLinks from './pages/MyLinks'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/mylinks" element={<MyLinks />} />
      </Routes>
    </main>
  )
}

export default App
