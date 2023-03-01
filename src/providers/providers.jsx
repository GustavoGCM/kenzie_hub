import { DasboardProvider } from "./DashboardContext";
import { LoginProvider } from "./LoginContext";
import { RegisterProvider } from "./RegisterContext";

function Providers({ children }) {
  return (
    <DasboardProvider>
      <RegisterProvider>
        <LoginProvider>{children}</LoginProvider>
      </RegisterProvider>
    </DasboardProvider>
  );
}

export default Providers;
