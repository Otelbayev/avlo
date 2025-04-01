import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Loader from "../components/loader";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader title="loadddd" />;

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
