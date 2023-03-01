import x from "/src/assets/X.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { ModalContainer } from "../ModalRegister/styles";
import { ButtonContainer } from "./styles";
import { DashboardContext } from "../../providers/DashboardContext";

const schema = yup
  .object({
    status: yup.string().required("O campo é obrigatório"),
  })
  .required();

function ModalUpdate() {
  const { setModalUpdate, deleteTech, deleteRequest, update, updateTechItem, tech, deleted } =
    useContext(DashboardContext);
  
  const {
    register,
    handleSubmit
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    deleted && deleteRequest();
  }, [deleted]);


  useEffect(() => {
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
              onClick={handleSubmit(updateTechItem)}
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
