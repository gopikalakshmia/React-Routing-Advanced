import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
    const data=useLoaderData();
    return ( <EventForm event={data.event}/>);
}

export default EditEvent;