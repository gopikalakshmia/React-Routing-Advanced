import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

function MainLayout() {
    return ( <>
    <MainNavigation/>
    <Outlet/>
    </> );
}

export default MainLayout;