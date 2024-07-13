import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import GuestLayout from "../layouts/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
