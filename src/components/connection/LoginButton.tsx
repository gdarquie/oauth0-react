import { useAuth0 } from "@auth0/auth0-react";
import React, { ReactElement } from "react";

const LoginButton = (): ReactElement<any, any> => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;