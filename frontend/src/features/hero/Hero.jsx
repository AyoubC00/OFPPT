import ofpptFront from "../../assets/ofppt.jpg"

const Hero = () =>
{
    return (
        <div className="relative max-h-[35rem] xl:max-h-[45rem] overflow-hidden">
            <img src={ ofpptFront } alt="OFPPT Front image" className="w-full translate-y-20 lg:-translate-y-10 object-cover" />
            <div className="bg-blue-gray-800 absolute z-30 top-0 left-0 w-full h-full mix-blend-overlay"></div>
        </div>
    )
}

export default Hero