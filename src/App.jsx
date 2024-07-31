import './App.css'
import NavBar from "./components/nav-bar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Separator from "./components/separator/Separator.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
export default function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Separator text={'Work'}/>
      <Work/>
      <Separator text={'Contact'}/>
      <Contact/>
      <hr/>
      <Footer/>
      <>



      </>
    </>
  )
}