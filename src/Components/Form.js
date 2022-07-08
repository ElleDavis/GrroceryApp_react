const Form = (props) => {
    // console.log(props);
    return (
 <form>
<label htmlFor="groceryItem"> groceryItem</label>
<input type="text" value={props.groceryItem} id="groceryItem"  onChange={props.handleChange}/> 

<label  htmlFor="groceryBrand"> groceryBrand </label>
<input type="text" value={props.groceryBrand} id="groceryBrand"  onChange={props.handleChange}/> 

<label  htmlFor="groceryUnits"> groceryUnits </label>
<input type="text" value={props.groceryUnits} id="groceryUnits"  onChange={props.handleChange}/> 

<label  htmlFor="groceryQuantity"> groceryQuantity </label>
<input type="number" value={props.groceryQuantity} id="groceryQuantity"  onChange={props.handleChange}/> 
<input type="submit" />
</form>

    )
}
export default Form

