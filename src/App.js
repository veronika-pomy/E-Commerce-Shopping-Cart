import React from "react";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";
import data from "./seeder/productSeeds.json";

// convert function component to class component 

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    };
  }

  render () {
    return (
      <div className='grid-container'>
        <Header />
        <ProductContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
