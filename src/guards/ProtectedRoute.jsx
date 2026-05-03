import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.userData);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
