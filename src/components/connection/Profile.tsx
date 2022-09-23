import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";
import { User } from '@auth0/auth0-spa-js';
import React, { ReactElement } from "react";

const Profile = (): ReactElement<any, any> => {
  const { user, isAuthenticated, isLoading }: Auth0ContextInterface<User> = useAuth0();
  console.log('authenticated?', isAuthenticated);
  console.log('load', isLoading);
  console.log('load', isLoading);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {user !== undefined && isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
      )}
      {!user && (
        <p>User is not connected</p>
      )}
    </div>

  );
};

export default Profile;