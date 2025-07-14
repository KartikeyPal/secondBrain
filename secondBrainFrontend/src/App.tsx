import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
