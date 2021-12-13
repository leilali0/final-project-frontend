import React, { useEffect, useState } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import FirebaseConfig from "./components/FirebaseConfig";
import "./App.css";
import UserProfile from "./pages/UserProfile";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Header from "./components/Header";

function App() {
  // Track if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // Check to see if there is any loading...
  const [loading, setLoading] = useState(true);
  // Store user information in state
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    // Initialize Firebase
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  // Set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          // User is signed out
          setUserInformation({});
          setLoggedIn(false);
        }
        // whenever state chnges setLoaing to false
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <div>
      <Header logout={logout} loggedIn={loggedIn} />
      <Router>
        <Routes>
          {/* USER PROFILE */}
          <Route
            path="/user/:id"
            element={
              loggedIn ? (
                <UserProfile userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* CREATE USER */}
          <Route
            path="/create-user"
            element={
              !loggedIn ? (
                <CreateUser
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* LOGIN */}
          <Route
            path="/login"
            element={!loggedIn ? <Login /> : <Navigate to="/" />}
          />
          {/* ADD POST */}
          <Route
            path="/add-post"
            element={
              loggedIn ? (
                <AddPost userInformation={userInformation} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* DASHBOARD */}
          <Route
            path="/"
            element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          {/* POST */}
          <Route
            path="/post/:id"
            element={loggedIn ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
