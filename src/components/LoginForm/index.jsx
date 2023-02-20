import { ErrorInput, Input } from "../../styles/inputs";
import { PinkButton, GreyButton } from "../../styles/buttons";
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido!")
      .required("O campo é obrigatório"),
    password: yup.string().required("O campo é obrigatório"),
  })
  .required();

function LoginForm({ toast }) {
  const [loginUser, setLogin] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  useEffect(() => {
    async function log() {
      localStorage.clear();
      try {
        const response = await api.post("sessions", loginUser);
        localStorage.setItem("@kenzie-hub:token", response.data.token);
        localStorage.setItem("@USER", JSON.stringify(response.data.user));
        navigate("/dashboard");
        toast.success("Usuário logado com sucesso!");
      } catch (error) {
        console.error(error);
        setLogin(null)
        toast.error("Senha ou email inválidos.");
      }
    }

    loginUser && log();
  }, [loginUser]);

  function login(data) {
    setLogin(data);
  }

  function RedirectToRegister() {
    navigate("/register");
  }

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(login)}>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          id="email"
          {...register("email")}
          placeholder="Digite seu email"
        />
        <ErrorInput>{errors.email?.message}</ErrorInput>
        <label htmlFor="pass">Senha</label>
        <Input
          type="password"
          id="pass"
          {...register("password")}
          placeholder="Digite sua senha"
        />
        <ErrorInput>{errors.password?.message}</ErrorInput>

        <PinkButton>Entrar</PinkButton>
      </form>
      <p>Ainda não possui uma conta?</p>
      <GreyButton onClick={RedirectToRegister}>Cadastre-se</GreyButton>
    </LoginContainer>
  );
}

export default LoginForm;
