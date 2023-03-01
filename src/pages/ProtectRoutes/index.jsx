import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "../../providers/LoginContext";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
}

export default ProtectedRoutes;
