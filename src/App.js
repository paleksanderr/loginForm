import { useState } from "react";

function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin",
    };

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);
    };

    const Logout = () => {
        console.log("logout");
    };

    return <div className="App">
        {(user.email !== '') ? (
            
        ) : ''}
    </div>;
}

export default App;
