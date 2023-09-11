import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MyLinks from './pages/MyLinks'
import HeaderBar from './components/HeaderBar'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <main>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/links" element={<MyLinks />} />
        </Routes>
      <NavigationBar/>
    </main>
  )
}

export default App
