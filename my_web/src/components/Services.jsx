import htmlLogo from "../assets/html-5.png"
import cssLogo from "../assets/css-3.png"
import jsLogo from "../assets/js.png"
import reactLogo from "../assets/react.png"
import tailwindLogo from "../assets/tailwind.png"
import bootstrapLogo from "../assets/bootstrap.png"
import vscodeLogo from "../assets/vscode.png"

export default function Services(){
    return(
        <div className=" h-[600px] bg-[#EBF4F6] flex justify-center items-center">
            <div className="flex justify-center p-[50px] gap-10">
                <div className="max-w-[600px] expertise">
                    <h1 className="text-[2.5rem] mb-[20px] text-[#201E43] font-bold">My Expertise</h1>
                    <p className="text-[1.2rem] font-thin text-justify">I really enjoy making websites. Right now, I'm diving into new frontend technologies, but I'm also learning backend development because my goal is to become a software engineer or a full-stack developer. I want to create lots of interesting and useful websites for various companies and personal businesses.</p>
                </div>
                <div className="w-[500px] skills">
                    <h2 className="text-[1.3rem] mb-[30px] text-center font-bold">Skills</h2>
                    <div className="grid-cols-3	grid gap-10 items-end">
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