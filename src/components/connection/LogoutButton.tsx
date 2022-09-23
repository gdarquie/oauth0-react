import { useAuth0 } from "@auth0/auth0-react";
import React, { ReactElement } from "react";

const LogoutButton = (): ReactElement<any, any> => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;