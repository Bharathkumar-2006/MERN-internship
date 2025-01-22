import { useState } from 'react'
import '../../css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    var [dropdown, showDropdown] = useState(false)
    const toggleDropDown=()=>{
        showDropdown(dropdown=>!dropdown)
    }
    return (
        <header>
            <nav>
                <ol>
                    <li><Link to="/home" className='Link'>Home</Link></li>
                    <li><Link to="/about" className='Link'>About</Link></li>
                    <li><Link to="/gallery" className='Link'>Gallery</Link></li>
                    <li><Link to="/contact" className='Link'>Contact</Link></li>
                    <li><Link to="/signup" className='Link'>Signup</Link></li>
                    <li><Link to="/login" className='Link'>Login</Link></li>
                    <li><Link to="/usestate" className="Link">UseState</Link></li>
                    <li><Link to="/useeffect" className="Link">Useeffect</Link></li>
                    <div>
                        <span onMouseEnter={(toggleDropDown)} onMouseLeave={(toggleDropDown) }>Hooks</span>
                        {dropdown &&(
                            <ul>
                                <li><Link to="/usestate" >UseState</Link></li>
                                <li><Link to="/useeffect">UseEffect</Link></li>
                            </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    )
}
export default Navbar;