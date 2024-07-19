import About from "../components/About";
import Contact from "../components/Contacts";
import Header from "../components/Header";
import Portofolio from "../components/Portofolio";
import Services from "../components/Services";
import Profile from "../components/Profile"

export default function Home(){
    return(
        <>
            <Header/>
            <Profile/>
            <About/>
            <Services/>
            <Portofolio/>
            <Contact/>
        </>
    )
}