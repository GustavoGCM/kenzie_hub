import { UserHeader } from "./styles";

function UserInfo({ name, module }) {
  return (
    <UserHeader>
      <h1>Olá, {name}</h1>
      <p>{module}</p>
    </UserHeader>
  );
}

export default UserInfo;
