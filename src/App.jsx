
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portofolioo from './pages/Portofolioo'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Portocv from './pages/Portocv'
function App(){

return(
    <>
<Router>
    <Routes>
        <Route path='/' element={<Portofolioo/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portocv' element={<Portocv/>}/>
    </Routes>
</Router>
    </>
)

}
export default App;







