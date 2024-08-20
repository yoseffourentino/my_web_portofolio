import logo from '../assets/logo.png'

export default function Footer() {
    return(
        <div className='bg-[#98b3b5]'>
            <div className='flex justify-around items-center p-[20px]'>
                <img src={logo} alt="" className='max-w-[120px]'/>
                <p>@ 2024 by Yosef Fourentino Wicaksono</p>
            </div>
        </div>
    )
}
