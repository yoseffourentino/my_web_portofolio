import fotoOcep from '../assets/ocep-2.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

export default function Profile(){
    return(
        <div className='flex justify-evenly mt-[20px]'>
            <div className='max-w-[600px] flex-col justify-center flex'>
                <h1 className='text-[3rem] font-bold'>Yosef Fourentino Wicaksono</h1>
                <h4 className='text-[1.5rem] pt-3'>i'm a Frontend Web Developer</h4>
                <p className='pt-10 text-justify'>hi, im Yosef Fourentino Wicaksono, but you can call me Yosef or most of my friend calls me Ocep, i am a final year student at Multimedia Nusantara University, majoring in Informatics. Basically i am interested to be a front-end web developer. </p>
                <p className='pt-10 flex gap-5 items-center'>
                    <span>Follow me:</span>
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
            <div>
                <img src={fotoOcep} alt="" className='w-[370px]'/>
            </div>
        </div>
    )
}