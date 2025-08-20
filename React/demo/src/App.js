import React from "react";
import Home from "./layout/Pages/Home";
import About from "./layout/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./layout/Pages/Contact";
import About1 from "./layout/Pages/About1";
import About2 from "./layout/Pages/About2";
import About3 from "./layout/Pages/About3";
import Not from "./layout/Pages/Not";
import Maincontext from "./context/Maincontext";
// import Propsdara from "./Props/Propsdara";
// import Statedata from "./state/Statedata";
// import Formdata from "./Form_handling/Formdata";
// import Formobject from "./Form_handling/Formobject";
// import Effect from "./useEffect/Effect";
// import UseTable from "./useEffect/UseTable";
// import UseData from "./useEffect/UseData";
// import Product from "./useEffect/Product";
// import Boot from "./bootstrap/Boot";
// import ReactCard from "./bootstrap/ReactCard";
// import MdbCard from "./bootstrap/MdbCard";
// import Footer from "./bootstrap/Footer";
// import ClassLife from "./Lifecycle/ClassLife";
// import Css from "./Css/Css";
// import User from "./Jsx/User";
// import ClassCompo from "./Component/ClassCompo";
// import Funccompo from "./Component/Funccompo";


function App() {
    return (
        <BrowserRouter>
        <div>
            {/* class copo  */}
            {/* <ClassCompo /> */}
            {/* <Funccompo /> */}

            {/* jsx component */}
            {/* <User /> */}

            {/* style apply */}
            {/* <Css /> */}

            {/* props data */}
            {/* <Propsdara /> */}

            {/* <Statedata /> */}

            {/* <Formdata /> */}
            {/* <Formobject /> */}

            {/* useEfect */}
            {/* <Effect /> */}
            {/* <UseTable /> */}
            {/* <UseData /> */}
            {/* <Product /> */}

            {/* <Boot /> */}
            {/* <ReactCard /> */}
            {/* <MdbCard /> */}
            {/* <Footer /> */}
            {/* <ClassLife /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="about1" element={<About1 />} />
                    <Route path="about2" element={<About2 />} />
                     <Route path="about3" element={<About3 />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                     <Route path="/context" element={<Maincontext />} />

                {/* universal path */}
                <Route path="*" element={<Not />} />
            </Routes>
           
        </div>
        </BrowserRouter>
    )
}

export default App;