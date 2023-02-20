import { BlackButton } from "../../styles/buttons";
import { LogoContainer } from "./styles";

function Logo({ container, width, buttonText, marginTop, buttonFunct }) {
  let borderValue = "none";

  function containerControl() {
    marginTop == "-20"
      ? (borderValue = "1px solid var(--grey-2)")
      : (borderValue = "none");
  }

  containerControl();

  return (
    <LogoContainer width={width} marginTop={marginTop} border={borderValue}>
      {container ? (
        <div>
          <h1>Kenzie Hub</h1>{" "}
          <BlackButton onClick={buttonFunct}>{buttonText}</BlackButton>
        </div>
      ) : (
        <h1>Kenzie Hub</h1>
      )}
    </LogoContainer>
  );
}

export default Logo;
