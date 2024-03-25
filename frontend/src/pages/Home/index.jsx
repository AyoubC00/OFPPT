import { Footer, Event, Inscription, LoginSection, Announcements, Welcome, MyWay } from '../../components'
import { useAuthContext } from '../../contexts/authContext';

function Home() {
  const { user: { token, user } } = useAuthContext();

  return (
    <>
      { !token ? <LoginSection /> : <Welcome user={ user }/> }
      <MyWay />
      <Announcements />
      <Event/>
      <Inscription/>
      <Footer/>
    </>
  )
}

export default Home