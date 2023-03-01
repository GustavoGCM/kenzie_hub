import x from "/src/assets/X.png";
import { ErrorInput, Input } from "../../styles/inputs";
import { PinkButton } from "../../styles/buttons";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../providers/DashboardContext";

const schema = yup
  .object({
    title: yup.string().required("O campo é obrigatório"),
    status: yup.string().required("O campo é obrigatório"),
  })
  .required();

function ModalRegister() {
  const { setModalReg, tech, registerTech, techData } =
    useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    tech && registerTech();
  }, [tech]);

  return (
    <ModalContainer>
      <div>
        <header>
          <h3>Cadastrar Tecnologia</h3>{" "}
          <img
            src={x}
            alt="Botão de fechar"
            onClick={() => setModalReg(null)}
          />
        </header>
        <form onSubmit={handleSubmit(techData)}>
          <label htmlFor="title">Nome</label>
          <Input
            type="text"
            id="title"
            placeholder="Nome da tecnologia"
            {...register("title")}
          />
          <ErrorInput>{errors.title?.message}</ErrorInput>
          <label htmlFor="title">Nome</label>
          <select id="level" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <PinkButton>Cadastrar</PinkButton>
        </form>
      </div>
    </ModalContainer>
  );
}

export default ModalRegister;
