// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Events, { dataEventLoader } from "./Pages/Events";
import EventDetails, { eventDataLodaerById ,deleteEventAction} from "./Pages/EventDetails";
import NewEvent, { newFormaction } from "./Pages/NewEvent";
import EditEvent from "./Pages/EditEvent";

import EventFom from "./components/EventForm";

import MainLayout from "./Pages/MainLayout";
import EventLayout from "./Pages/EventLayout";
import Error from "./Pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "events",
          element: <EventLayout />,
          children: [
            {index:true, element: <Events />, loader: dataEventLoader },
            {
              path: ":id",
              action: deleteEventAction,
              loader: eventDataLodaerById,
              children: [
                {
                  path: "",
                  element: <EventDetails />,
                  loader: eventDataLodaerById,
                 
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                  loader: eventDataLodaerById,
                 
                },
              ],
            },
            { path: "new", element: <NewEvent />, action: newFormaction },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
