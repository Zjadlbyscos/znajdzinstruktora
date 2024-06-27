
import { Outlet } from "react-router-dom";

export const ShareedLayout = () => {

    return(
        <>
        <p>this is sharedlayout</p>

        <Outlet/>
 

        <p>this is footer </p>
        </>
        
    )
}