import React, { useEffect, useState } from "react";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import ConnectLinks from "./Components/ConnectLinks";
import Loader from "./Components/Loader";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cursor from "./Components/Cursor";
import Projects from "./Components/Projects";

function App() {

  const [loader,setLoader] = useState(true);

  useEffect(()=>{
    setTimeout(() => setLoader(false),2000);
  },[])


  return (
    <div className="bg-Blue h-full w-full relative">
      {
        loader ? (<Loader/>) :

     ( <>
     {/* main content */}
      <Cursor/>
      <Navbar/>
      <ConnectLinks/>
      <div className="w-[80%] h-full mx-auto bg-Blue max-[640px]:w-full">
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
      </div>

      </>)
}
    </div>
  );
}

export default App;
