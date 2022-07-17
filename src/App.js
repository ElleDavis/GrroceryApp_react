import './App.css';
import groceryData from './Data/groceryData';
import { Component } from 'react';
import GroceryList from "./Components/GroceryList"
import Form from "./Components/Form"
import ShoppingCart from './Components/ShoppingCart';



class App extends Component {
  state = {
    groceryData: groceryData,
    shoppingCartItems: [],
    groceryItem:"",
    groceryBrand:"",
    groceryUnits:"",
    groceryQuantity: 0
  };

  // update the values entered into the inputs
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  //taking in the data once the submit button is pressed and adding that data in SetState which update he changes in state, then reset the console to empty
  handleSubmit = (event) => {
    event.preventDefault();
    // create a new product object
    const newProduct = {
      item: this.state.groceryItem,
      brand: this.state.groceryBrand,
      units: this.state.groceryUnits,
      quantity:this.state.groceryQuantity,
      isPurchased: true
    };
    console.log(newProduct);
    this.setState({
      groceryData: [newProduct, ...this.state.groceryData],
      groceryItem: "",
      groceryBrand: "",
      groceryUnits:"",
      groceryQuantity:0,
    });
};
addToCart = (groceryData) => {
  console.log(groceryData);
  this.setState({shoppingCartItems: [groceryData, ...this.state.shoppingCartItems]})
}

  render() {
    // console.log(groceryData)
    return (
      <div className="App"> 
       <h1>My Grocery List</h1>
        <ShoppingCart shoppingCartItems={this.state.shoppingCartItems}/>
      
        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        groceryItem={this.state.groceryItem}
        groceryBrand={this.state.groceryBrand}
        groceryUnits={this.state.groceryUnits}
        groceryQuantity={this.state.groceryQuantity}
        />
     
        <GroceryList groceryData={this.state.groceryData} addToCart={this.addToCart}/>   
      </div>
    );
  }
}

export default App;
