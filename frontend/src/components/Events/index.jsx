import { Carousel, Typography } from "@material-tailwind/react"
import EventAnnouncement from "./EventAnnouncement"
import eventsData from "../../dataEvent"
import { NextArrow, PreviousArrow } from "./controllersIcons"
import chunkElements from "../../utils/chunkElements"
const Event = () =>
{
    const data = chunkElements(eventsData);
    return (
        data.length ?
        <div className="w-full mb-8 pt-16">
            <Typography variant="small" className="text-3xl px-4 mb-8 sm:px-16 md:w-3/4 md:mx-auto md:px-4">
                Evenements
            </Typography>
            <Carousel 
                className="hidden lg:flex w-5/6 mx-auto px-2 md:px-16 gap-4 md:gap-32 pb-16" 
                autoplay={ true } 
                autoplayDelay={ 5000 }
                transition={{type: "tween", duration: 1.5}}
                loop={ true }
                prevArrow={ PreviousArrow }
                nextArrow={ NextArrow }
            >
                {
                    data.map((eventDetails, index) => 
                        <div className="relative grid md:grid-rows-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full" key={index}>
                            {
                                eventDetails.map(e => 
                                <EventAnnouncement eventDetails={ e } key={e.title + index}/>
                                )
                            }
                        </div>
                    )
                }
            </Carousel>
            <Carousel 
                className="lg:hidden w-5/6 mx-auto px-2 md:px-16 flex gap-4 md:gap-32 py-16" 
                autoplay={ true } 
                autoplayDelay={ 3000 }
                transition={{type: "tween", duration: 1}}
                loop={ true }
                prevArrow={ PreviousArrow }
                nextArrow={ NextArrow }
            >
                {
                    eventsData.map((e, index) => 
                        <EventAnnouncement eventDetails={ e } key={e.title + index}/>
                    )
                }
            </Carousel>
        </div> : null
    )
}

export default Event