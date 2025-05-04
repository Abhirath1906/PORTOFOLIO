
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portofolioo from './pages/Portofolioo'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Portocv from './Pages/Portocv'
function App(){

return(
    <>
<Router>
    <Routes>
        <Route path='/' element={<Portofolioo/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portocv' element={<Portocv/>} />
    </Routes>
</Router>
    </>
)

}
export default App;







