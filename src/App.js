// import Contact from "../components/contact/Contact";

import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Port from "./components/port/Port";
import Test from "./components/testi/Test";
import Topbar from "./components/top/Topbar";
import Work from "./components/work/Work";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const[menuOpen,setmenu]=useState(false)
  return (
    <div className="app">
 <Topbar  menuOpen={menuOpen}  setmenu={setmenu}/>
 <Menu menuOpen={menuOpen}  setmenu={setmenu}/>
 <div className="section">
<Intro/>
<Port/>
<Work/>
<Test/>
<Contact/>

 </div>
    </div>
  );
}

export default App;
