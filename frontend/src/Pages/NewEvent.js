import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEvent() {
  return (
    <>
      <EventForm />
    </>
  );
}

export default NewEvent;

export const newFormaction = async ({ request, params }) => {
  console.log("action");
  const data = await request.formData();
  const dataForm = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  };
  console.log(dataForm);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataForm),
  });
  console.log(response);
  if (!response.ok) {
    throw { message: "unable to post element" };
  } else return redirect("/events");
};
