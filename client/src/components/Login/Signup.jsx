import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignupButton () {
    const { loginWithRedirect } = useAuth0();

    return(
            <button onClick={()=>loginWithRedirect()} className="btn btn-outline-dark btn-sm ms-4 ps-3 pe-3">Sign up </button>
    )
};
