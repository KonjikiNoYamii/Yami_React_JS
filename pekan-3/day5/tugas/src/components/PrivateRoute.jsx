import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuth = localStorage.getItem("isLoggIn") === "bjorka jangan mencuri";
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
