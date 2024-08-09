import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

export default function Contact(){
    return(
        <div className="bg-[#201E43]">
            <div className='p-[50px]'>
            <h1 className="text-[2.5rem] font-bold text-[#EEEEEE] text-center">Let's Work Together</h1>
            <p className="text-[1.3rem] text-center text-[#919191] pt-[20px]">Eager for new opportunities and ready to deliver innovative solutions to your projects. Reach out for collaboration and discussions!</p>
            <div className="flex justify-center gap-9 pt-[30px]">
                <div>
                    <h2 className="text-[#919191] text-[1.2rem]">Call:</h2>
                    <p className="text-[#EEEEEE] text-[1.8rem] font-medium">+62 812 1906 3587</p>
                </div>
                <div>
                    <h2 className="text-[#919191] text-[1.2rem]">Email:</h2>
                    <p className="text-[#EEEEEE] text-[1.8rem] font-medium">yoseffourentino30@gmail.com</p>
                </div>
                <p className='flex gap-5 items-center'>
                    <span className="text-[#919191] text-[1.2rem]">Follow me:</span>
                    <Link to='https://www.instagram.com/yosef.fw/'>
                        <img className='img-icon w-[50px] bg-[#EBF4F6] p-3 rounded-[20px] hover:bg-[#5eabad]' src={instagram} alt=""/>
                    </Link>
                    <Link to='https://github.com/yoseffourentino'>
                        <img className='img-icon w-[50px] bg-[#EBF4F6] p-3 rounded-[20px] hover:bg-[#5eabad]' src={github} alt=""/>
                    </Link>
                    <Link to='https://www.linkedin.com/in/yoseffourentino'>
                        <img className='img-icon w-[50px] bg-[#EBF4F6] p-3 rounded-[20px] hover:bg-[#5eabad]' src={linkedin} alt=""/>
                    </Link>
                </p>
            </div>
            </div>            
        </div>
    )
}