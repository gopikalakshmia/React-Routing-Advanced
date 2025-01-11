import { Link, useParams } from "react-router-dom";

function EventDetails() {
const params=useParams();
    
    return ( <>
    <h1>EventsDetails</h1>
    {params.id}
   
    </> );
}

export default EventDetails;