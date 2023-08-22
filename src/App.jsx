import { useState } from "react";
import "./index.css";

import {
  Navbar,
  Header,
  About,
  Skills,
  Portfolio,
  Experience,
  Testimonials,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
