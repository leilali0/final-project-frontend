import React from "react";

function Header({ logout, loggedIn, userInformation }) {
  return (
    <header className="HeaderWrapper ">
      <div className="Header">
        <h1 className="Logo">Rate Your Public Restroom</h1>
        <nav>
          {!loggedIn && (
            <>
              <a className="link" href="/login">
                Login
              </a>
              <a className="link" href="/create-user">
                Create User
              </a>
            </>
          )}
          {loggedIn && (
            <>
              <a className="link" href="/add-post">
                Add Post
              </a>
              <a className="link" href="/">
                DashBoard
              </a>
              <a className="link" href={`/user/${userInformation.uid}`}>
                My Profile
              </a>
              <button className="button" onClick={() => logout()}>
                Log Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
