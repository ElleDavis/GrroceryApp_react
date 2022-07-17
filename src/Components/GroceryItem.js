

const GroceryItem  = (props) => {
//const {groceryItem, groceryBrand, groceryUnits, groceryQuantity} = props.groceryData
        return(
            <div onClick={ () => props.addToCart(props.groceryData)}>
            <h3>{props.groceryData.item}</h3>
            <h3>{props.groceryData.brand}</h3>
            <h3>{props.groceryData.units}</h3>
            <h3>{props.groceryData.quantity}</h3>
            </div>
        )
}
export default GroceryItem 
