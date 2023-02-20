import { ErrorInput, Input } from "../../styles/inputs";
import { RegisterContainer } from "./styles";
import { PinkButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services";

const schema = yup
  .object({
    name: yup.string().required("Este campo é obrigatório"),
    email: yup.string().email().required("Este campo é obrigatório"),
    password: yup
      .string()
      .matches(/\d/, "Precisa conter ao menos 1 número")
      .matches(/[a-z]/, "Precisa conter ao menos 1 letra minúscula")
      .matches(/[A-Z]/, "Precisa conter ao menos 1 letra maiúscula")
      .matches(/\W|_/, "Precisa conter ao menos 1 caractere especial")
      .matches(/.{8,}/, "Precisa conter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Senha precisa ser igual a informada acima")
      .required("Este campo é obrigatório"),
    bio: yup.string().required("Este campo é obrigatório"),
    contact: yup.string().required("Este campo é obrigatório"),
  })
  .required();

function RegisterForm({ toast }) {
  const [user, setNewUser] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function createUser() {
      try {
        const response = await api.post("users", user);
        console.log(response.data);
        navigate("/login");
        toast.success("Usuário criado com sucesso!");
      } catch (error) {
        console.error(error);
        toast.error("O email de usuário já existe!");
      }
    }

    user && createUser();
  }, [user]);

  console.log(user);

  function registerUser(data) {
    delete data.confirmPass, delete data.module;

    setNewUser(data);
  }

  return (
    <RegisterContainer>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <ErrorInput>{errors.name?.message}</ErrorInput>

        <label htmlFor="email">Email</label>
        <Input
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <ErrorInput>{errors.email?.message}</ErrorInput>

        <label htmlFor="password">Senha</label>
        <Input
          type="text"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <ErrorInput>{errors.password?.message}</ErrorInput>

        <label htmlFor="confirmPass">Confirmar senha</label>
        <Input
          type="text"
          id="confirmPass"
          placeholder="Digite novamente sua senha"
          {...register("confirmPass")}
        />
        <ErrorInput>{errors.confirmPass?.message}</ErrorInput>

        <label htmlFor="bio">Bio</label>
        <Input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <ErrorInput>{errors.bio?.message}</ErrorInput>

        <label htmlFor="contact">Contato</label>
        <Input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <ErrorInput>{errors.contact?.message}</ErrorInput>

        <label htmlFor="module">Módulo</label>
        <select id="module" {...register("course_module")}>
          <option value="Primeiro módulo">Primeiro módulo</option>
        </select>

        <PinkButton>Cadastrar</PinkButton>
      </form>
    </RegisterContainer>
  );
}

export default RegisterForm;
