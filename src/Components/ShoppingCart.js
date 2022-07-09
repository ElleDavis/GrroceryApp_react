import GroceryItem from "./GroceryItem"

const ShoppingCart = (props) => {

    return (
       <div>
            <h3>Cart</h3>
            {
                props.shoppingCartItems.map(( item, idx) => <GroceryItem groceryData={item} key={idx}/>)
            }
       </div>
    )
}
export default ShoppingCart