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
import UpdateProperty from "../pages/Properties/UpdateProperty";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
      },
      {
        path: "/addProperties",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProperties",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProperty/:id",
        loader: ({ params }) =>
          fetch(
            `https://homenest-server-hcpj3tua8-sehabul-islams-projects.vercel.app/updateProperty/${params.id}`
          ),
        element: <UpdateProperty></UpdateProperty>,
      },
      {
        path: "/propertyDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://homenest-server-hcpj3tua8-sehabul-islams-projects.vercel.app/propertyDetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRatings",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
