import ofpptFront from "../../assets/univ.jpg"
import AutoPlayAnnouncement from "../Announcements/AutoPlayAnnouncement"

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img src={ofpptFront} alt="OFPPT Front image" className="w-full block object-cover" />
            <div className="container absolute bottom-0 left-0 right-0 m-auto -translate-y-full">
                <AutoPlayAnnouncement />
            </div>
        </div>
    )
}

export default Hero