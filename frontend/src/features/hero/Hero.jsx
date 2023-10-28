import ofpptFront from "../../assets/ofppt.jpg"

const Hero = () =>
{
    return (
        <div className="relative max-h-[35rem] overflow-hidden">
            <img src={ ofpptFront } alt="OFPPT Front image" className="w-full object-fill translate-y-10 md:translate-y-0" />
            <div className="bg-blue-gray-800 absolute z-30 top-0 left-0 w-full h-full mix-blend-overlay"></div>
        </div>
    )
}

export default Hero