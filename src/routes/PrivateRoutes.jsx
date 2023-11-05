import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-48">
        <progress className="progress progress-error w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};
export default PrivateRoutes;
