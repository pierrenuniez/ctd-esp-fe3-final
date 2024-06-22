import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { routes } from "./Routes/routes";
import { useContextGlobal } from "./Components/utils/global.context";
import { useEffect } from "react";

function App() {

  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>} />
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path="*" element={<h1>Error 404 - Page not found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;