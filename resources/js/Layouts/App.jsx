import React from "react";
import Navbar from "@/Components/Navbar/NavbarComponent";

function App({children}) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default App;
