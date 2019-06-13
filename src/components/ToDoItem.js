import React from "react";

class ToDoItem extends React.Component {
    render () {
        const doneStyle = {
            color: "mediumspringgreen",
            textDecoration: "line-through"
        }
        const notDoneStyle = {
            color: "grey",
            fontWeight: "bold"
        }

        return (
            <div className="todo-item">
                <li>
                    <input type="checkbox"
                           checked={this.props.task.completed}
                           onChange={() => this.props.handleChange(this.props.task.id)}
                    />
                    <label style={this.props.task.completed ? doneStyle : notDoneStyle}>{this.props.task.name}</label>
                </li>
            </div>
        )
    }
}

export default ToDoItem;

