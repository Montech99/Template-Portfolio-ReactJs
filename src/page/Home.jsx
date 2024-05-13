import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomeSection from "../components/HomeSection"
import TutorsSection from "../components/TutorsSection"
import Patners from "../components/Patners"
import Contact from "../components/Contact"

import '../styles/Home.css'
function Home(){
    return(
     <>
<Navbar />
<HomeSection />
<TutorsSection />
<Patners />
<Contact />
<Footer />

   </>
    )
}
export default Home