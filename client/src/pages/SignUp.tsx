import React from 'react'

const SignUp = () => {
    const params = new URLSearchParams(window.location.search.substring(1));
    const googleId = params.get("googleId");

    console.log(googleId);
    
    return (
        <div>
            <h1>Sign Up Page</h1>
        </div>
    )
}

export default SignUp
