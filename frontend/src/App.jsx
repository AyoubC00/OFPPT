import Announcements from "./components/Announcements"
import LoginSection from "./features/loginSection/LoginSection"
import Hero from "./features/hero/Hero"
import Navbar from "./features/navbar/Navbar"
import Events from "./components/sectionEvents/Events"
import Filieres from "./components/Filieres"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LoginSection />
      <Announcements />
      <Events/>
      <Filieres/>
      <Footer/>
    </>
  )
}

export default App
