import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Feature from "./Website/Pages/Feature";
import Gallery from "./Website/Pages/Gallery";
import Attraction from "./Website/Pages/Attraction";
import Package from "./Website/Pages/Package";
import Team from "./Website/Pages/Team";
import Testi from "./Website/Pages/Testi";
import Contact from "./Website/Pages/Contact";
import NotFound from "./Website/Pages/NotFound";
import Dashboard from "./Admin/Apages/Dashboard";
import Blogsmanage from "./Admin/Apages/Blogsmanage";
import TeamMange from "./Admin/Apages/TeamMange";
import Addblog from "./Admin/Apages/Addblog";
 import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* website */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/feacture" element={<Feature />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attri" element={<Attraction />} />
          <Route path="/pack" element={<Package />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Testi />} />
          <Route path='/contact' element={<Contact />} />

          {/* unviserl */}
          <Route path="*" element={<NotFound />} />

          {/* Admin routes */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/blogmanage" element={<Blogsmanage />} />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/teamManger" element={<TeamMange />} />
          

        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
