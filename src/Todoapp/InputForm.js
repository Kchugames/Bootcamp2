import { Component } from "react";

class InputForm extends Component{
state = {
    currentItem: "",
}

handleChange = (event) => {
    this.setState({currentItem: event.target.value});
    
}


    render() {

    return (
        <>
            <form>
                <label> New Task </label>
                <input type="text" placeholder="Add Next Task Here" onChange={this.handleChange}/>
<br/>
                <button>Add Item </button>
            </form>
        </>
    )
    }

}
export default InputForm;