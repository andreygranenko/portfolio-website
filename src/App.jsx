import './App.css'
import NavBar from "./components/nav-bar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Separator from "./components/separator/Separator.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Traffic from '/traffic/traffic_1.png'
import ModalWork from "./components/modal-work/ModalWork.jsx";
import Marvel from '/marvel_img.png'
import Shop from '/shop.png'


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
      <ModalWork
        id={'traffic-modal'}
        title={'Traffic App'}
        description={'Web application, the purpose of which is to help learn the traffic rules and road signs of Latvia. Contains the rules themselves in a convenient format, as well as signs with a high-quality explanation of the meaning. Users can take a test for the selected category to better prepare for the real test'}
        img={Traffic}
      />
      <ModalWork
        id={'store-modal'}
        title={'Online Store'}
        description={'An online store with different categories of goods (mainly technology), the purpose of which is to offer the user the most relevant product so that the user can see if he needs it.\n' +
          'It is possible to filter by category, by price range, and by various other parameters.\n' +
          'The user has an option to log in to view his cart'}
        img={Shop}
      />
      <ModalWork
        id={'marvel-modal'}
        title={'Marvel App'}
        description={'Web catalog of all marvel characters and comics, written using the Marvel API.\n' +
          'The user has an option to view a randomly generated character by clicking on the button. There is a catalog of absolutely all characters, as well as comics. To get more detailed by clicking on any of them'}
        img={Marvel}
      />
    </>
  )
}