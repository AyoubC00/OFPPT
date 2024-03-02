import { Footer, Events, Filieres, Navbar, Hero, LoginSection, Announcements } from '../../components'

function Home() {
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

export default Home