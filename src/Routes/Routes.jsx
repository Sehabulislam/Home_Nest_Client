import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllProperties from "../pages/Properties/AllProperties";
import AddProperty from "../pages/Properties/AddProperty";
import MyProperties from "../pages/Properties/MyProperties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import MyRatings from "../pages/Ratings/MyRatings";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Error404 from "../pages/Error404";
import Loading from "../pages/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement : <Loading></Loading>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/allProperties',
        element : <AllProperties></AllProperties>
      },
      {
        path : '/addProperties',
        element : <AddProperty></AddProperty>
      },
      {
        path : '/myProperties',
        element : <MyProperties></MyProperties>
      },
      {
        path : '/propertyDetails/:id',
        element : <PropertyDetails></PropertyDetails>
      },
      {
        path : '/myRatings',
        element : <MyRatings></MyRatings>
      },
      {
        path : '/Login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
    ]
  },
  {
    path : '*',
    element : <Error404></Error404>
  }
]);