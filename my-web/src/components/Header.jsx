import logo from '../assets/yosef-logo.png'

export default function Header(){
    return(
        <nav className='shadow'>
            <div className='flex justify-around items-center'>
                <img src={logo} alt="" className='max-w-[180px]'/>
                <ul className='flex gap-10'>
                    <li className='nav-items'>Home</li>
                    <li className='nav-items'>About</li>
                    <li className='nav-items'>Service</li>
                    <li className='nav-items'>Portofolio</li>
                    <li className='nav-items'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}