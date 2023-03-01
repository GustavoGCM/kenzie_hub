import Logo from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import { PageContainer } from "../../styles/pagesStyles";
import { useContext } from "react";
import { RegisterContext } from "../../providers/RegisterContext";

function RegisterPage({ toast }) {
  const { returnPage } = useContext(RegisterContext)

  return (
    <PageContainer>
      <Logo
        container={true}
        width="415"
        buttonText="Voltar"
        marginTop={0}
        buttonFunct={returnPage}
      />
      <RegisterForm toast={toast} />
    </PageContainer>
  );
}

export default RegisterPage;
