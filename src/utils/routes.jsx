import { lazy, Suspense } from "react";
import Loader from "../components/loader";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));

const Users = lazy(() => import("../pages/users"));
const UsersAdd = lazy(() => import("../pages/users/add"));
const UsersUpdate = lazy(() => import("../pages/users/update"));

const Employee = lazy(() => import("../pages/employee"));
const EmployeeAdd = lazy(() => import("../pages/employee/add"));
const EmployeeUpdate = lazy(() => import("../pages/employee/update"));

const EmployeeType = lazy(() => import("../pages/employee-type"));
const EmployeeTypeAdd = lazy(() => import("../pages/employee-type/add"));
const EmployeeTypeUpdate = lazy(() => import("../pages/employee-type/update"));

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
    path: "/users/add",
    element: <UsersAdd />,
  },
  {
    path: "/users/edit/:id",
    element: <UsersUpdate />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/employee/add",
    element: <EmployeeAdd />,
  },
  {
    path: "/employee/edit/:id",
    element: <EmployeeUpdate />,
  },
  {
    path: "/employee-type",
    element: <EmployeeType />,
  },
  {
    path: "/employee-type/add",
    element: <EmployeeTypeAdd />,
  },
  {
    path: "/employee-type/edit/:id",
    element: <EmployeeTypeUpdate />,
  },
];
