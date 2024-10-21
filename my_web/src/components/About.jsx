import ocep from "../assets/ocep.png"
import yosefcv from "../file/YosefCV.pdf"

export default function About(){
    return(
        <div>
        <div className="bg-[#088395] flex justify-center items-center">
            <div className="max-w-[500px]">
                <img src={ocep} alt="" />
            </div>
            <div className="max-w-[600px] flex flex-col gap-4 about-content">
                <h1 className="text-[2.5rem] text-[#d0f6ff] font-bold">About Me</h1>
                <p className="text-[#d0f6ff] text-justify">Hey everyone, I'm an active student at Multimedia Nusantara University, majoring in Informatics. My skills in IT are mainly in frontend development. I really enjoy creating websites with my wild imagination. I've completed many projects that you can check out on my portfolio page below.</p>
                <p className="text-[#d0f6ff]"> I'm a cheerful person who loves to chat. One of my favorite ways to unwind when I'm tired is to hang out at cafes with my close friends.</p>
                <a className="bg-[#d0f6ff] w-[200px] p-[25px] rounded-[10px] font-bold text-center hover:opacity-75" href="https://drive.google.com/file/d/1ytdXKN7Fve4URim93RREiH94MQM0usIy/view?usp=sharing" target="_blank">Download CV</a>
            </div>
        </div>
        </div>
    )
}