import { useContext, useEffect, useState } from "react";
import Logo from "../../components/Logo";
import ModalRegister from "../../components/ModalRegister";
import ModalUpdate from "../../components/ModalUpdate";
import TechList from "../../components/TechList";
import UserInfo from "../../components/UserInfo";
import { DashboardContext } from "../../providers/DashboardContext";
import { LoginContext } from "../../providers/LoginContext";
import { PageContainer } from "../../styles/pagesStyles";

function DashboardPage() {
  const { logout } = useContext(LoginContext);

  const { updateTech, profile, ModalRegIsOpen, ModalUpdateIsOpen } =
    useContext(DashboardContext);

  useEffect(() => {
    updateTech();
  }, [profile]);

  return (
    <PageContainer>
      <Logo
        width="780"
        marginTop="-20"
        container={true}
        buttonFunct={() => logout()}
        buttonText="Sair"
      />
      <UserInfo name={profile.name} module={profile.course_module} />
      <TechList />
      {ModalRegIsOpen ? <ModalRegister /> : null}
      {ModalUpdateIsOpen ? <ModalUpdate /> : null}
    </PageContainer>
  );
}

export default DashboardPage;
