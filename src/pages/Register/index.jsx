import Logo from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import { PageContainer } from "../../styles/pagesStyles";
import { useNavigate } from "react-router-dom";

function RegisterPage({ toast }) {
  const navigate = useNavigate();

  function returnPage() {
    navigate(-1);
  }
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
