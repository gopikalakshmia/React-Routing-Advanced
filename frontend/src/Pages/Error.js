import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function Error() {
    const error=useRouteError();
    let message="Some error occured"
    if(error.status==500){
       message  =error.message;
    }
    return ( <PageContent title={"An error occured"}>
        <p>{message}</p>
        </PageContent>
);
}

export default Error;