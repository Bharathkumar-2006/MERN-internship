import { useState } from 'react'
import './App.css'
import About from './components/FunctionalComponents/About';
import ClassCompEG from './components/classComponents/ClassCompEG';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       <Home/>
      <About/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE Logo" page="Gallery"/>
      <ClassCompEG/>
      <Contact/>
    </div> 
    </>
  )
}

export default App;
