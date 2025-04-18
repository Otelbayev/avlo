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

const StoreType = lazy(() => import("../pages/store-type"));
const StoreTypeAdd = lazy(() => import("../pages/store-type/add"));
const StoreTypeUpdate = lazy(() => import("../pages/store-type/update"));

const Store = lazy(() => import("../pages/store"));
const StoreAdd = lazy(() => import("../pages/store/add"));
const StoreUpdate = lazy(() => import("../pages/store/update"));

const WindowForm = lazy(() => import("../pages/w-form"));
const WindowFormAdd = lazy(() => import("../pages/w-form/add"));
const WindowFormUpdate = lazy(() => import("../pages/w-form/update"));

const WindowSize = lazy(() => import("../pages/w-size"));
const WindowSizeAdd = lazy(() => import("../pages/w-size/add"));
const WindowSizeUpdate = lazy(() => import("../pages/w-size/update"));

const WindowAssembly = lazy(() => import("../pages/w-assembly"));
const WindowAssemblyAdd = lazy(() => import("../pages/w-assembly/add"));
const WindowAssemblyUpdate = lazy(() => import("../pages/w-assembly/update"));

const ArchiveStore = lazy(() => import("../pages/archive/store"));
const Logs = lazy(() => import("../pages/logs"));

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
  {
    path: "/store-type/add",
    element: <StoreTypeAdd />,
  },
  {
    path: "/store-type",
    element: <StoreType />,
  },
  {
    path: "/store-type/edit/:id",
    element: <StoreTypeUpdate />,
  },
  {
    path: "/store/add",
    element: <StoreAdd />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/store/edit/:id",
    element: <StoreUpdate />,
  },

  {
    path: "/w-form/add",
    element: <WindowFormAdd />,
  },
  {
    path: "/w-form",
    element: <WindowForm />,
  },
  {
    path: "/w-form/edit/:id",
    element: <WindowFormUpdate />,
  },

  {
    path: "/w-size/add",
    element: <WindowSizeAdd />,
  },
  {
    path: "/w-size",
    element: <WindowSize />,
  },
  {
    path: "/w-size/edit/:id",
    element: <WindowSizeUpdate />,
  },
  {
    path: "/w-assembly",
    element: <WindowAssembly />,
  },
  {
    path: "/w-assembly/add",
    element: <WindowAssemblyAdd />,
  },
  {
    path: "/w-assembly/edit/:id",
    element: <WindowAssemblyUpdate />,
  },
  {
    path: "/archive/store",
    element: <ArchiveStore />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
];
