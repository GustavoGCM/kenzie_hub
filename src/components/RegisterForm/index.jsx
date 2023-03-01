import { ErrorInput, Input } from "../../styles/inputs";
import { RegisterContainer } from "./styles";
import { PinkButton } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react"
import { RegisterContext } from "../../providers/RegisterContext";

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

function RegisterForm() {

  const { createUser, user, registerUser } = useContext(RegisterContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    user && createUser();
  }, [user]);

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
