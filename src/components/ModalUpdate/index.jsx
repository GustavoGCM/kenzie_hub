import x from "/src/assets/X.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import { useEffect, useState } from "react";
import { ModalContainer } from "../ModalRegister/styles";
import { ButtonContainer } from "./styles";

const schema = yup
  .object({
    status: yup.string().required("O campo é obrigatório"),
  })
  .required();

function ModalUpdate({ setModalUpdate, setProfile, techID, toast }) {
  const [tech, setNewTech] = useState(null);
  const [deleted, setDeleted] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function deleteTech(data) {
    setDeleted(data);
  }

  useEffect(() => {
    async function deleteRequest() {
      try {
        const token = localStorage.getItem("@kenzie-hub:token");
        await api.delete(`users/techs/${techID}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setModalUpdate(null);
        toast.success("Projeto deletado com sucesso");
        setProfile(token);
      } catch (error) {
        console.error(error);
      }
    }

    deleted && deleteRequest();
  }, [deleted]);

  function updateTech(data) {
    setNewTech(data);
  }

  useEffect(() => {
    async function update() {
      try {
        const token = localStorage.getItem("@kenzie-hub:token");
        const response = await api.put(`users/techs/${techID}`, tech, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setModalUpdate(null);
        toast.success("Projeto alterado com sucesso");
        setProfile(token);
      } catch (error) {
        console.error(error);
      }
    }
    tech && update();
  }, [tech]);

  return (
    <ModalContainer>
      <div>
        <header>
          <h3>Alterar ou excluir tecnologia</h3>
          <img
            src={x}
            alt="Botão de fechar"
            onClick={() => setModalUpdate(null)}
          />
        </header>
        <form>
          <label htmlFor="title">Status</label>
          <select id="level" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avancado">Avançado</option>
          </select>
          <ButtonContainer>
            <button
              className="register"
              id="register"
              onClick={handleSubmit(updateTech)}
            >
              Cadastrar
            </button>
            <button
              className="remove"
              id="remove"
              onClick={handleSubmit(deleteTech)}
            >
              Excluir
            </button>
          </ButtonContainer>
        </form>
      </div>
    </ModalContainer>
  );
}

export default ModalUpdate;
