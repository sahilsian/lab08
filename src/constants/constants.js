import Dashboard from "../routes/agnostic/dashboard/dashboard";
import Home from "../routes/agnostic/home/home";
import Profile from "../routes/agnostic/profile/profile";
export const tabs = [
    {
        name: "Home",
        route: "",
        component: <Home></Home>
    },
    {
        name: "Profile",
        route: "profile",
        component: <Profile></Profile>
    },
    {
        name: "Dashboard",
        route: "dashboard",
        component: <Dashboard></Dashboard>
    }
]