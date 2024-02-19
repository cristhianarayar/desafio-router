import { Routes, Route } from 'react-router-dom'
import './App.css'
import Contacto from './component/Contacto/Contacto'
import Home from './component/Home/Home'
import Notfound from './component/Notfound/Notfound'
import Navegator from './component/Navegator/Navegator'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <Navegator />
      <Routes>
          <Route path='/' element = {< Home/>}></Route>
          <Route path='/Contacto' element={< Contacto/>}></Route>
          <Route path='*' element={< Notfound/>}></Route>
      </Routes>

    </>
  )
}

export default App
