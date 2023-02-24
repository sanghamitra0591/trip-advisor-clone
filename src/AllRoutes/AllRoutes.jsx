import {Routes, Route} from "@chakra-ui/react";
import Navbar from "../Components/Navbar"

function AllRoutes(){
    return <Routes>
        <Route path="/" elements={<Navbar/>} ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
}

export default AllRoutes;