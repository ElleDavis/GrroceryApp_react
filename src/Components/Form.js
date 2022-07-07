const Form = (props) => {
    console.log(props);
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

{/* <form>
<label htmlFor="groceryItem"> groceryItem</label>
<input type="text" groceryItem={this.state.groceryItem} id="groceryItem"> </input>

<label  htmlFor="groceryBrand"> groceryBrand </label>
<input type="text" groceryBrand={this.state.groceryBrand} id="groceryBrand"> </input>

<label  htmlFor="groceryUnits"> groceryUnits </label>
<input type="text" groceryUnits={this.state.groceryUnits} id="groceryUnits"> </input>

<label  htmlFor="groceryQuantity"> groceryQuantity </label>
<input type="number" groceryQuantity={this.state.groceryQuantity} id="groceryQuantity"> </input>
</form> */}

{/* <form>
<label htmlFor="groceryItem"> groceryItem</label>
<input type="text" groceryItem={props.groceryItem} id="groceryItem"> </input>

<label  htmlFor="groceryBrand"> groceryBrand </label>
<input type="text" groceryBrand={props.groceryBrand} id="groceryBrand"> </input>

<label  htmlFor="groceryUnits"> groceryUnits </label>
<input type="text" groceryUnits={props.groceryUnits} id="groceryUnits"> </input>

<label  htmlFor="groceryQuantity"> groceryQuantity </label>
<input type="number" groceryQuantity={props.groceryQuantity} id="groceryQuantity"> </input>
</form> */}