import Announcements from "./components/Announcements"
import { useDispatch } from "react-redux"
import { addAnnouncement } from "./features/announcements/AnnouncementsSlice"

function App() {
  return (
    <>
      <Announcements />
    </>
  )
}

export default App
