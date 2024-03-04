import Login from "@/components/Login";
import React from "react";
import { cookies } from "next/headers";

function Admin() {
    const cookieStore = cookies();
    const auth = cookieStore.get("Auth");
    console.log(auth);
    if (!auth) {
        return (
            <div>
                <Login />
            </div>
        );
    }
    return <div>Page</div>;
}

export default Admin;
