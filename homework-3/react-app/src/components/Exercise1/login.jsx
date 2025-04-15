import React from "react";

const Login = ({onLogin}) => {
    return(
        <div>
            <h2>Please log in to continue</h2>
            <button onClick={onLogin}>Log In</button>
        </div>
    );
};

export default Login;