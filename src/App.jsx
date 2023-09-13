import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MyLinks from './pages/MyLinks'
import HeaderBar from './components/HeaderBar'
import NavigationBar from './components/NavigationBar'
import NotFoundPage from './pages/notFoundPage'

function App() {

  return (
    <main>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<p> register page</p>} />
          <Route path="/login" element={<p>login page</p> }/>
          <Route path="/mylinks" element={<MyLinks />} />
          <Route path="/filter"element={<p>filter</p>} />
          <Route path="/links:id" element={<p>one link page</p> }/>
          <Route path="/account" element={<p>account page</p> }/>
          <Route path="*" element={<NotFoundPage /> }/>
        </Routes>
      <NavigationBar/>
    </main>
  )
}

export default App
