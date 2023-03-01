import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services";

export const DashboardContext = createContext({});

export function DasboardProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [techs, setTechs] = useState([]);
  const [tech, setNewTech] = useState(null);
  const [ModalRegIsOpen, setModalReg] = useState(null);
  const [ModalUpdateIsOpen, setModalUpdate] = useState(null);
  const [deleted, setDeleted] = useState(null);

  async function updateTech() {
    try {
      const token = localStorage.getItem("@kenzie-hub:token");

      const response = await api.get("profile", {
        headers: {
          " Authorization": `Bearer ${token}`,
        },
      });

      setProfile(response.data);
      setTechs(response.data.techs);
    } catch (error) {
      console.error(error);
    }
  }

  function techData(data) {
    setNewTech(data);
  }

  async function registerTech() {
    try {
      const token = localStorage.getItem("@kenzie-hub:token");
      await api.post("users/techs", tech, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(token);
      setModalReg(null);
      toast.success("Projeto criado com sucesso!");
      setNewTech(null);
    } catch (error) {
      console.error(error);
    }
  }

  function deleteTech(data) {
    setDeleted(data);
  }

  async function deleteRequest() {
    try {
      const techID = ModalUpdateIsOpen;
      const token = localStorage.getItem("@kenzie-hub:token");
      await api.delete(`users/techs/${techID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModalUpdate(null);
      toast.success("Projeto deletado com sucesso");
      setProfile(token);
      setDeleted(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function update() {
    try {
      const techID = ModalUpdateIsOpen;
      const token = localStorage.getItem("@kenzie-hub:token");
      const response = await api.put(`users/techs/${techID}`, tech, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModalUpdate(null);
      toast.success("Projeto alterado com sucesso");
      setProfile(token);
      setNewTech(null);
    } catch (error) {
      console.error(error);
    }
  }

  function updateTechItem(data) {
    setNewTech(data);
  }

  return (
    <DashboardContext.Provider
      value={{
        ModalRegIsOpen,
        ModalUpdateIsOpen,
        setModalReg,
        setModalUpdate,
        profile,
        techs,
        updateTech,
        setProfile,
        registerTech,
        tech,
        techData,
        deleteTech,
        deleted,
        updateTechItem,
        deleteRequest,
        update,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
