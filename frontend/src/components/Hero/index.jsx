import { Typography } from "@material-tailwind/react";
import ofpptFront from "../../assets/univ.jpg"
import { useAuthContext } from '../../contexts/authContext';
import LoginSection from "../LoginSection";
import Welcome from "../Welcome";
const Hero = () => {
    const { user: { token, user } } = useAuthContext();
    return (
        <div className="relative overflow-hidden">
            <img src={ofpptFront} alt="OFPPT Front image" className="absolute left-0 top-0 h-full w-full block object-cover" />
            <div className="relative">
                {!token ? <LoginSection /> : <Welcome user={user} />}
            </div>
        </div>
    )
}

export default Hero