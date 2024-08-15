import './App.css'
import NavBar from "./components/nav-bar/NavBar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Separator from "./components/separator/Separator.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Traffic1 from '/traffic/traffic1.png'
import Traffic2 from '/traffic/traffic2.png'
import Traffic3 from '/traffic/traffic3.png'
import Traffic4 from '/traffic/traffic4.png'
import Traffic5 from '/traffic/traffic5.png'
import Traffic6 from '/traffic/traffic6.png'
import Traffic7 from '/traffic/traffic7.png'
import Traffic8 from '/traffic/traffic8.png'
import Traffic9 from '/traffic/traffic9.png'
import ModalWork from "./components/modal-work/ModalWork.jsx";
import Marvel from '/marvel1.png';
import Marvel1 from '/marvel2.png';
import Marvel2 from '/marvel3.png';
import Marvel3 from '/marvel4.png';
import Shop1 from '/shop/shop1.png';
import Shop2 from '/shop/shop2.png';
import Shop3 from '/shop/shop3.png';
import Shop4 from '/shop/shop4.png';
import Shop5 from '/shop/shop5.png';
import Shop6 from '/shop/shop6.png';
import Shop7 from '/shop/shop7.png';
import Shop8 from '/shop/shop8.png';


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
        img={[Traffic1, Traffic2, Traffic3, Traffic4, Traffic5, Traffic6, Traffic7, Traffic8, Traffic9]}
      />
      <ModalWork
        id={'store-modal'}
        title={'Online Store'}
        description={'An online store with different categories of goods (mainly technology), the purpose of which is to offer the user the most relevant product so that the user can see if he needs it.\n' +
          'It is possible to filter by category, by price range, and by various other parameters.\n' +
          'The user has an option to log in to view his cart'}
        img={[Shop1, Shop2, Shop3, Shop4, Shop5, Shop6, Shop7, Shop8]}
      />
      <ModalWork
        id={'marvel-modal'}
        title={'Marvel App'}
        description={'Web catalog of all marvel characters and comics, written using the Marvel API.\n' +
          'The user has an option to view a randomly generated character by clicking on the button. There is a catalog of absolutely all characters, as well as comics. To get more detailed by clicking on any of them'}
        img={[Marvel, Marvel1, Marvel2, Marvel3]}
      />
    </>
  )
}