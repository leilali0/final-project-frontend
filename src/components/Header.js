import React from "react";

function Header({ logout, loggedIn }) {
  return (
    <header className="HeaderWrapper ">
      <div className="Header PageWrapper">
        <h1 className="Logo">Happy Doggo</h1>
        <nav>
          {!loggedIn && (
            <>
              <a href="/login">Login</a>
              <a href="/create-user">Create User</a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="/user/:id">My Profile</a>
              <a href="/add-post">Add Post</a>
              <a href="/">DashBoard</a>
              <button onClick={() => logout()}>Log Out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
