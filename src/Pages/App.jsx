import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portofolioo from './Portofolioo'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Portocv from './Portocv'
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