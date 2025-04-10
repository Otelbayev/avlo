import { lazy, Suspense } from "react";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Users = lazy(() => import("../pages/users"));
const Employee = lazy(() => import("../pages/employee"));
const EmployeeType = lazy(() => import("../pages/employee-type"));

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/employee-type",
    element: <EmployeeType />,
  },
];
