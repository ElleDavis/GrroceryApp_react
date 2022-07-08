import { Component } from 'react';
import './App.css';
import groceryData from './Data/groceryData';
import GroceryList from "./Components/GroceryList"
import Form from "./Components/Form"
import ShoppingCart from './Components/ShoppingCart';


class App extends Component{
  state = {
    groceryData: groceryData,
    groceryItem:"",
    groceryBrand:"",
    groceryUnits:"",
    groceryQuantity: 0
  };

  // update the values entered into the inputs
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // create a new product object
    const newProduct = {
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: true
    };
    console.log(newProduct);
    this.setState({
      productsData: [newProduct, ...this.state.groceryData],
      productName: "",
      productPrice: 0,
      productDescription: "",
    });
}
addToCart = (product) => {
  console.log(product);
  this.setState({itemInShoppingCart: [product, ...this.state.itemInShoppingCart]})
}

  render(){
    // console.log(groceryData)
  return (
    <div className="App"> 
      <h1>My Grocery List</h1>
      <ShoppingCart itemInShoppingCart={this.state.itemInShoppingCart}/>
      
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        groceryItem={this.state.groceryItem}
        groceryBrand={this.state.groceryBrand}
        groceryUnits={this.state.groceryUnits}
        groceryQuantity={this.state.groceryQuantity}
      />
     
      <GroceryList groceryData={this.state.groceryData}/>   
    </div>
  );
  }
}

export default App;
