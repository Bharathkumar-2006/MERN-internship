import About from "./components/FunctionalComponent/About"
import Home from "./components/FunctionalComponent/Home"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Contact"
import Navbar from "./components/FunctionalComponent/Navbar"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from "./components/FunctionalComponent/Signup"
import Login from "./components/FunctionalComponent/Login"
import UseState from "./components/FunctionalComponent/Hooks/UseState"
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect"
function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/usestate" element={<UseState/>}></Route>
          <Route path="/useeffect" element={<UseEffect/>}></Route>
          
    </Routes>
    
  </BrowserRouter>
  
  );
  }
  export default App;