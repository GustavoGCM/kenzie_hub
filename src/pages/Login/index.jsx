import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import { PageContainer } from "../../styles/pagesStyles";

function LoginPage({ toast }) {
  return (
    <PageContainer>
      <Logo container={false} width={415} marginTop="0" />
      <LoginForm toast={toast} />
    </PageContainer>
  );
}

export default LoginPage;
