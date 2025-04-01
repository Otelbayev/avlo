import { lazy, Suspense } from "react";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));

export const page = [
  {
    title: "Login",
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
];

export const adminPage = [
  {
    title: "Home",
    path: "/home",
    element: <Home />,
  },
];
