import { useDispatch } from "react-redux"
import Announcements from "./components/Announcements"
import LoginSection from "./features/loginSection/LoginSection"
function App() {
  return (
    <>
      <LoginSection />
      <Announcements />
    </>
  )
}

export default App
