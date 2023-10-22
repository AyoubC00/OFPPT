import Announcements from "./components/Announcements"
import { useDispatch } from "react-redux"
import { addAnnouncement } from "./features/announcements/AnnouncementsSlice"
import Events from "./components/sectionEvents/Events"

function App() {
  return (
    <>
      <Announcements />
      <Events/>
    </>
  )
}

export default App
