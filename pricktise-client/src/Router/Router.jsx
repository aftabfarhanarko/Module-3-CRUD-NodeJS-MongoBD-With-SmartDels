import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import CreatFoodProducat from "../Pages/CreatFoodProducat";
import Login from "../components/Login";
import Register from "../components/Register";
import FoodDetlics from "../Pages/FoodDetlics";
import BidsFood from "../Pages/BidsFood";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/allfood",
                loader:() => fetch("https://pricktise-server.vercel.app/food"),
                element:<AllFood></AllFood>
            },
            {
                path:"/creatFood",
                element:<CreatFoodProducat></CreatFoodProducat>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/detlise/:id",
                loader:({params}) => fetch(`https://pricktise-server.vercel.app/food/${params.id}`),
                element:<FoodDetlics></FoodDetlics>
            },
            {
                path:"/bidsFood",
                element:<BidsFood></BidsFood>
            }
        ]
    }
])