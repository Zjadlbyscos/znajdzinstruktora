
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";

export const ShareedLayout = () => {

    return(
        <>
   <Header/>

        <Outlet/>
 

        <p>this is footer rendered in sharedlayout </p>
        </>
        
    )
}