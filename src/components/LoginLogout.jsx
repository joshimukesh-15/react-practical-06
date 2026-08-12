import React, { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome, User!" : "Please Log In"}
      </h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginLogout;