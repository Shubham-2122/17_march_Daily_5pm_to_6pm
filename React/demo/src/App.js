import React from "react";
import ClassCompo from "./Component/ClassCompo";
import Funccompo from "./Component/Funccompo";


function App() {
    return (
        <div>
            <h1>hello React web application</h1>
            {/* class copo  */}
            <ClassCompo />
            <ClassCompo />
            <Funccompo />
            <Funccompo />
        </div>
    )
}

export default App;