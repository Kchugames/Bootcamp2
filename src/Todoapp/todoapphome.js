import InputForm from './InputForm.js';

const { Component } = require("react");

class ToDoAppHome extends Component {
        render() {
        return (
<>
        <h1> To Do List App</h1>
            {/* input form for the to do list */}
        <InputForm> </InputForm>
</>
);
}
}
