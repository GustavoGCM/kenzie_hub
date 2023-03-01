import { ErrorInput, Input } from "../../styles/inputs";
import { PinkButton, GreyButton } from "../../styles/buttons";
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect} from "react";
import { LoginContext } from "../../providers/LoginContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido!")
      .required("O campo é obrigatório"),
    password: yup.string().required("O campo é obrigatório"),
  })
  .required();

function LoginForm() {
 
  const { log, login, RedirectToRegister, loginUser } = useContext(LoginContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
  

  useEffect(() => {

    loginUser && log();

  }, [loginUser]);

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
