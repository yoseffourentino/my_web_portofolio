import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import porto1 from "../assets/porto-1.png"

export default function Portofolio(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return(
        <div className="bg-[#7FA1C3]">
            <h1 className="text-[2.5rem] font-bold text-[#F5EDED] pt-[30px] text-center">My Recent Project</h1>
            <div className="max-w-[70%] m-auto p-20">
                <div className="z-0"> 
                    <Slider {...settings}> 
                        <div className="flex flex-col justify-center items-center bg-white text-center rounded-[10px]">
                            <div className="bg-[#201E43] rounded-t-[10px]">
                                <img src={porto1} alt="" className="p-6" />
                            </div>
                            <div className="pb-10 flex flex-col gap-5">
                                <p className="mt-5">Portfolio Maker</p>
                                <p>Sebuah website untuk membuat portofolio kalian menjadi mudah</p>
                                <Link to="" className="bg-[#5090eb] px-5 py-2 rounded-[10px] hover:bg-[#3d71ba] duration-[0.3s] m-auto">See Website</Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-white text-center rounded-[10px]">
                            <div className="bg-[#201E43] rounded-t-[10px]">
                                <img src={porto1} alt="" className="p-6" />
                            </div>
                            <div className="pb-10 flex flex-col gap-5">
                                <p className="mt-5">News Portal</p>
                                <p>a website that has a lot of popular news</p>
                                <Link to="" className="bg-[#5090eb] px-5 py-2 rounded-[10px] hover:bg-[#3d71ba] duration-[0.3s] m-auto">See Website</Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-white text-center rounded-[10px]">
                            <div className="bg-[#201E43] rounded-t-[10px]">
                                <img src={porto1} alt="" className="p-6" />
                            </div>
                            <div className="pb-10 flex flex-col gap-5">
                                <p className="mt-5">Portfolio Maker</p>
                                <p>Sebuah website untuk membuat portofolio kalian menjadi mudah</p>
                                <Link to="" className="bg-[#5090eb] px-5 py-2 rounded-[10px] hover:bg-[#3d71ba] duration-[0.3s] m-auto">See Website</Link>
                            </div>
                        </div>
                    </Slider>    
                </div>              
            </div>
        </div>
    )
}