import { useContext } from "react";
import { DashboardContext } from "../../providers/DashboardContext";
import { TechsContainer } from "./styles";
import add from "/src/assets/+.png";

function TechList() {
  const { techs, setModalReg, setModalUpdate } = useContext(DashboardContext)

  return (
    <TechsContainer>
      <div>
        <h1>Tecnologias</h1>
        <img
          src={add}
          alt="Adicionar tecnologia"
          onClick={() => setModalReg(true)}
        />
      </div>
      <ul>
        {techs.length > 0 ? (
          techs.map((tech) => (
            <li
              onClick={() => setModalUpdate(tech.id)}
              id={tech.id}
              key={tech.id}
            >
              <h2>{tech.title}</h2> <p>{tech.status}</p>
            </li>
          ))
        ) : (
          <h1>Não adicionou nenhuma tecnologia ainda!</h1>
        )}
      </ul>
    </TechsContainer>
  );
}

export default TechList;
