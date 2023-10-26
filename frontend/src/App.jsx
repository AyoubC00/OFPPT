import Announcements from "./components/Announcements"
import LoginSection from "./features/loginSection/LoginSection"
import Hero from "./features/hero/Hero"
import Navbar from "./features/navbar/Navbar"
import Events from "./components/sectionEvents/Events"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LoginSection />
      <Announcements />
      <Events/>
    </>
  )
}

export default App
