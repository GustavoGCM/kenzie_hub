import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services";
import { toast } from "react-toastify";

export const LoginContext = createContext({});

export function LoginProvider({ children }) {
  const [loginUser, setLogin] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(data) {
    setLogin(data);
  }

  useEffect(() => {
    const token = localStorage.getItem("@kenzie-hub:token");
    if (token) {
      async function autoRedirect() {
        try {
          const response = await api.get("/profile", {
            headers: {
              " Authorization": `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
      autoRedirect();
    }
  }, []);

  function logout() {
    localStorage.clear();
    setLogin(null);
    setUser(null);
    navigate("/");
    toast.success("Você foi deslogado com sucesso!");
  }

  function RedirectToRegister() {
    navigate("/register");
  }

  async function log() {
    localStorage.clear();
    try {
      const response = await api.post("sessions", loginUser);
      localStorage.setItem("@kenzie-hub:token", response.data.token);
      localStorage.setItem("@USER", JSON.stringify(response.data.user));
      console.log(response.data);
      navigate("/dashboard");
      setUser(response.data);
      toast.success("Usuário logado com sucesso!");
    } catch (error) {
      console.error(error);
      setLogin(null);
      toast.error("Senha ou email inválidos.");
    }
  }

  return (
    <LoginContext.Provider
      value={{
        login,
        log,
        RedirectToRegister,
        loginUser,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
