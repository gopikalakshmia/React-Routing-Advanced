import { Link, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetails() {
  const data = useLoaderData();
  console.log(data);
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetails;

export const eventDataLodaerById = async ({request, params}) => {

  const response = await fetch("http://localhost:8080/events/" + params.id);

  if (!response) {
  } else return response;
};
