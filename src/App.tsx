import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resized, setResized] = useState<number>(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setResized(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", (e) => {
        setResized(window.innerWidth);
      });
    };
  }, [window.innerWidth]);

  return (
    <section className="body__wrapper">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} width={resized} />
      <MainComponent width={resized} />
      <Footer />
    </section>
  );
};

export default App;
