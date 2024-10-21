/* eslint-disable react/no-unescaped-entities */
import htmlLogo from "../assets/html-5.png"
import cssLogo from "../assets/css-3.png"
import jsLogo from "../assets/js.png"
import reactLogo from "../assets/react.png"
import tailwindLogo from "../assets/tailwind.png"
import bootstrapLogo from "../assets/bootstrap.png"
import vscodeLogo from "../assets/vscode.png"
import felogo from "../assets/frontend.png"
import belogo from "../assets/backend.png"
import uiuxlogo from "../assets/ui-ux.png"

export default function Services(){
    return(
        <div className=" h-[1200px] bg-[#EBF4F6] flex justify-center items-center">
            <div className="flex flex-col justify-center p-[50px] gap-10">
                <div className="max-w-[1300px] line-kiri">
                    <h1 className="text-[2.5rem] mb-[20px] text-[#201E43] font-bold">My Expertise</h1>
                    <p className="text-[1.2rem] font-thin text-justify">I really enjoy making websites. Right now, I'm diving into new frontend technologies, but I'm also learning backend development because my goal is to become a software engineer or a full-stack developer. I want to create lots of interesting and useful websites for various companies and personal businesses.</p>
                </div>
                <div className="max-w-[1300px] flex flex-col items-end line-kanan">
                    <h1 className="text-[2.2rem] mb-[20px] text-[#201E43] font-bold">What do i offer?</h1>
                    <p className="text-[1.2rem] font-thin text-end">Although I describe myself as a frontend developer, I can also be a fullstack developer. I can provide services as a frontend developer, backend developer, and UI/UX designer. I really enjoy building projects from scratch because it allows me to be as creative as my mind can be.</p>
                </div>
                <div className="max-w-[1300px]">
                    <div className="grid-cols-3 grid bg-[#ffd561]">
                        <div>
                            <img src={felogo} alt="" className="max-w-[250px]"/>
                            <h2>Frontend Development</h2>
                        </div>
                        <div>
                            <img src={belogo} alt="" className="max-w-[250px]"/>
                            <h2>Backend Development</h2>
                        </div>
                        <div>
                            <img src={uiuxlogo} alt="" className="max-w-[250px]"/>
                            <h2>UI/UX Designer</h2>
                        </div>
                    </div>
                </div>
                <div className="w-[1300px]">
                    <h2 className="text-[1.3rem] mb-[30px] text-center font-bold">Skills</h2>
                    <div className="grid-cols-4	grid gap-10 items-end">
                        <div className="flex flex-col items-center gap-3">
                            <img src={htmlLogo} alt="" className="w-[50px] logo"/>   
                            <p className="">HTML</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={cssLogo} alt="" className="w-[50px] logo"/>
                            <p>CSS</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={jsLogo} alt="" className="w-[50px] logo"/>
                            <p>Javascript</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={reactLogo} alt="" className="w-[50px] logo"/>
                            <p>React</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={tailwindLogo} alt="" className="w-[50px] logo pt-[13px] pb-[13px]"/>
                            <p>Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={bootstrapLogo} alt="" className="w-[50px] logo"/>
                            <p>Bootstrap</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <img src={vscodeLogo} alt="" className="w-[50px] logo"/>
                            <p>VSCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}