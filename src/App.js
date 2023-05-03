import React from "react";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default App;
