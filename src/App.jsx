import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyLinks from './pages/MyLinks'
import HeaderBar from './components/HeaderBar'
import NavigationBar from './components/NavigationBar'
import NotFoundPage from './pages/notFoundPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'

function App() {

  return (
    <main>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/mylinks" element={<MyLinks />} />
          <Route path="/filter"element={<p>filter</p>} />
          <Route path="/links:id" element={<p>one link page</p> }/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="*" element={<NotFoundPage /> }/>
        </Routes>
      <NavigationBar/>
    </main>
  )
}

export default App
