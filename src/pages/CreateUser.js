import React, { useCallback } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          updateProfile(auth.currentUser, {
            displayName,
          })
            .then(() => {
              console.log("signed up!");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.warn({ errorCode, errorMessage });
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
