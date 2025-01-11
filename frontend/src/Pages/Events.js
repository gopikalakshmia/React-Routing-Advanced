import { Link, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
function Events() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export const dataEventLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  //const data=await response.json();
  //console.log(data.events);
  if (!response.ok) {
  } else return response;
};

export default Events;
