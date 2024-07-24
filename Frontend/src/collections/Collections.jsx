import React from "react";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";


const Collections = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Collection />
      </div>
      <Footer />
    </>
  );
};

export default Collections;
