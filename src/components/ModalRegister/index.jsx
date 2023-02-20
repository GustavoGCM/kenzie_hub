import x from "/src/assets/X.png";
import { ErrorInput, Input } from "../../styles/inputs";
import { PinkButton } from "../../styles/buttons";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    title: yup.string().required("O campo é obrigatório"),
    status: yup.string().required("O campo é obrigatório"),
  })
  .required();

function ModalRegister({ setModalReg, setProfile, toast }) {
  const [tech, setNewTech] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function registerTech(data) {
    setNewTech(data);
  }

  useEffect(() => {
    async function registerTech() {
      try {
        const token = localStorage.getItem("@kenzie-hub:token");
        await api.post("users/techs", tech, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(token);
        setModalReg(null);
        toast.success("Projeto criado com sucesso!");
      } catch (error) {
        console.error(error);
      }
    }
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
        <form onSubmit={handleSubmit(registerTech)}>
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
