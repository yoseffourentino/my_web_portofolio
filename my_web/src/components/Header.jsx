import logo from '../assets/logo.png'
import { useState } from 'react'

export default function Header(){
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 45){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className={navbar ? 'nav-container active' : 'nav-container'}>
                <img src={logo} alt="" className='max-w-[140px]'/>
                <ul className='flex gap-10'>
                    <li className='nav-items'>Home</li>
                    <li className='nav-items'>About</li>
                    <li className='nav-items'>Skills</li>
                    <li className='nav-items'>Portofolio</li>
                    <li className='nav-items'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}