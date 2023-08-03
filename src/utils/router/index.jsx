import { PresentationChartBarIcon, PowerIcon, BookOpenIcon, AcademicCapIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import Body from "../../Components/Body";
import Dashboard from "../../Components/Dashboard";
import MyCourses from "../../Components/MyCourses";
import Register from "../../Components/Register";
import VideoPage from "../../Components/VideoPage";
import ExternalVideoPage from "../../Components/ExternalVideoPage";
import In_Card from "../../Components/In_Card";


export const navbar = [
    {
        id: 1,
        title: "Dashboard",
        url: "/dashboard",
        icon_comp: <PresentationChartBarIcon className="h-7 w-7  text-[22px]" />,
        Element: <Dashboard />
    },

    {
        id: 2,
        title: "Courses", url: "/courses",
        icon_comp: <AcademicCapIcon className="h-7 w-7" />,
        Element: <Body />,
    },

    {
        id: 3,
        title: "My Courses",
        url: "/my_course",
        icon_comp: <BookOpenIcon className="h-7 w-7" />,
        Element: <MyCourses />,

    },


    {
        id: 4,
        title: "",
        url: "/my_course/:id",
        hidden: true,
        Element: < ExternalVideoPage />,

    },
    {
        id: 66,
        title: "",
        url: "/courses/:id",
        hidden: true,
        Element: <In_Card />

    },
    {
        id: 5,
        title: "courses expres",
        url: "/my_course/:id/:id",
        hidden: true,
        Element: < ExternalVideoPage />,

    },
    {
        id: 6,
        title: "courses extra",
        url: "/my_course/:id/:id/:id",
        hidden: true,
        Element: < VideoPage />,
    },
    // {
    //     id: 6,
    //     title: "courses extra",
    //     url: "/courses/:id/:id/:id/:id",
    //     hidden: true,
    //     Element: < VideoPage />,
    // },

    {
        id: 5,
        title: "Return",
        url: "dashboard",
        icon_comp: <ArrowRightCircleIcon className="h-7 w-7  text-[22px]" />,
        bottom_sid: true,
        Element: <Dashboard />,

    },

    {
        id: 6,
        title: "Log Out",
        url: "account",
        reg: true,
        icon_comp: <PowerIcon className="h-7 w-7" />,
        bottom_sid: true,
        Element: <Register />,


    },
    // {
    //     id: 6,
    //     title: "log Out,",
    //     url: "pay",
    //     icon_comp: <PowerIcon className="h-7 w-7" />,
    //     Element: <Uzcard />,


    // }
]
