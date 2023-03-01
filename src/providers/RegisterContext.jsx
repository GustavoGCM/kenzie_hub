import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services";

export const RegisterContext = createContext({});

export function RegisterProvider({ children }) {
  const navigate = useNavigate();
  const [user, setNewUser] = useState(null);

  async function createUser() {
    try {
      const response = await api.post("users", user);
      navigate("/");
      toast.success("Usuário criado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("O email de usuário já existe!");
    }
  }

  function registerUser(data) {
    delete data.confirmPass, delete data.module;

    setNewUser(data);
  }

  function returnPage() {
    navigate(-1);
  }

  return (
    <RegisterContext.Provider
      value={{ returnPage, registerUser, user, createUser, setNewUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
