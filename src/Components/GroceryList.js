
import GroceryItem from "../Components/GroceryItem"; 
// import groceryData from "../Data/groceryData";

const GroceryList = (props) =>{
    return (
            <div> 
                <h1>GroceryList</h1>
               {/* {props.groceryData.map(GroceryData)}  */}
                {props.groceryData.map((item, idx) => item.isPurchased && <GroceryItem groceryData={item} key={idx} addToCart={props.addToCart}/> )}
            </div>
    )
}
export default GroceryList

 