import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-48">
        <progress className="progress progress-error w-56"></progress>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoutes;
