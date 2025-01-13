import { Link, useLoaderData, useParams,redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetails() {
  const data = useLoaderData();
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

export const deleteEventAction=async({request,params})=>{
  console.log(params.id);
  const response = await fetch("http://localhost:8080/events/" + params.id,{method:request.method});
  if(!response.ok){throw({message:'Delete is not successfull'})}
  else
  return redirect('/events');
}
