import React, { useState } from "react";
import UserStatus from "./userStatus";
import AdminPanel from "./adminPanel";
import Login from "./login";


const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log("dashboard");
    return(
        <div style={{backgroundColor: "lightgreen", border: "2px dashed rgb(76, 136, 70)"}}>
           
            
            <h2>User Status Dashboard</h2>
            {!isLoggedIn ? (
                <Login onLogin={()=> setIsLoggedIn(true)}/>
            ) : (
                <div>
                    <UserStatus isAdmin={isAdmin}/>
                    <button onClick={() => setIsAdmin(!isAdmin)}>Admin</button>
                    <button onClick={()=>{ setIsLoggedIn(false); setIsAdmin(false);}}>Log Out</button>
                    {isAdmin && <AdminPanel/>}
                </div>
            )
            
        }
        </div>
    )
}

export default Dashboard;