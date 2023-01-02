import React, { useState } from "react";
import MenuMobile from "./components/MenuMobile";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div>
      <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <Header />
      <Home />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
