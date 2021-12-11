import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const displayName = e.currentTarget.displayName.value;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
          user
            .updateProfile({
              displayName,
            })
            .then(function () {
              // Update sucessful
            })
            .catch((error) => {
              alert(error.message);
            });
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <h2>Create User</h2>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default CreateUser;
