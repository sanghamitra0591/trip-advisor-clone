import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";

function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/hotel" element={<Hotel />} ></Route>
    </Routes>
}

export default AllRoutes;