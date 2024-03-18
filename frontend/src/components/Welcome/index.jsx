import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { BookOpenIcon, CalendarDaysIcon, PaperClipIcon, Squares2X2Icon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const Welcome = ({ user }) =>
{
    const { logout } = useAuthContext();
    return (
        <div className="container min-w-full bg-gray-50 text-blue-gray-900 py-16">
            <Card className="w-full lg:w-3/4 sm:w-5/6 mx-auto rounded-none shadow-none sm:shadow-sm sm:rounded-md ">
                <CardBody>
                    <div className="flex items-center justify-between mb-6">
                        <Typography variant="lead">
                            Bienvenu, { user.nom } { user.prenom }
                        </Typography>
                        <LogoutButton />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-2 xl:grid-cols-4 gap-x-4">
                        <NavLink to="/dashboard">
                            <Card className="shadow-none rounded-sm sm:shadow-sm">
                                <CardBody className="py-3 px-5">
                                    <Squares2X2Icon className="h-6 w-6 inline-block me-2"/>
                                    <Typography variant="small" className="inline">Dashboard</Typography>
                                </CardBody>
                            </Card>
                        </NavLink>
                        <NavLink to="/dashboard/courses">
                            <Card className="shadow-none rounded-sm sm:shadow-sm">
                                <CardBody className="py-3 px-5">
                                    <BookOpenIcon className="h-6 w-6 inline-block me-2"/>
                                    <Typography variant="small" className="inline">Courses</Typography>
                                </CardBody>
                            </Card>
                        </NavLink>
                        <NavLink to="/dashboard/quizzes">
                            <Card className="shadow-none rounded-sm sm:shadow-sm">
                                <CardBody className="py-3 px-5">
                                    <PaperClipIcon className="h-6 w-6 inline-block me-2"/>
                                    <Typography variant="small" className="inline">Quizzes</Typography>
                                </CardBody>
                            </Card>
                        </NavLink>
                        <NavLink to="/dashboard/emploi_de_temps">
                            <Card className="shadow-none rounded-sm sm:shadow-sm">
                                <CardBody className="py-3 px-5">
                                    <CalendarDaysIcon className="h-6 w-6 inline-block me-2"/>
                                    <Typography variant="small" className="inline">Emploi de temps</Typography>
                                </CardBody>
                            </Card>
                        </NavLink>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
export default Welcome