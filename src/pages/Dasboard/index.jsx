import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ModalRegister from "../../components/ModalRegister";
import ModalUpdate from "../../components/ModalUpdate";
import TechList from "../../components/TechList";
import UserInfo from "../../components/UserInfo";
import { api } from "../../services";
import { PageContainer } from "../../styles/pagesStyles";

function DashboardPage({ toast }) {
  const [profile, setProfile] = useState({});
  const [techs, setTechs] = useState([]);
  const [ModalRegIsOpen, setModalReg] = useState(null);
  const [ModalUpdateIsOpen, setModalUpdate] = useState(null);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
    toast.success("Você foi deslogado com sucesso!");
  }

  useEffect(() => {
    async function updateTech() {
      try {
        const token = localStorage.getItem("@kenzie-hub:token");

        const response = await api.get("profile", {
          headers: {
            " Authorization": `Bearer ${token}`,
          },
        });

        setProfile(response.data);
        setTechs(response.data.techs);
      } catch (error) {
        console.error(error);
      }
    }

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
      <TechList
        techs={techs}
        setModalReg={setModalReg}
        setModalUpdate={setModalUpdate}
      />
      {ModalRegIsOpen ? (
        <ModalRegister
          setProfile={setProfile}
          setModalReg={setModalReg}
          toast={toast}
        />
      ) : null}
      {ModalUpdateIsOpen ? (
        <ModalUpdate
          setModalUpdate={setModalUpdate}
          setProfile={setProfile}
          techID={ModalUpdateIsOpen}
          toast={toast}
        />
      ) : null}
    </PageContainer>
  );
}

export default DashboardPage;
