import React from "react";
import ToDoItem from "./ToDoItem";
import tasksData from "./tasksData";

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: tasksData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateTasks = prevState.tasks.map(task => {
                if(task.id === id)
                    task.completed = !task.completed;
                return task;
            });
            return {
                tasks: updateTasks
            }
        });
    }

    render () {
        const taskComponents = this.state.tasks.map(item => <ToDoItem key={item.id} task={item} handleChange={this.handleChange}/>);

        return (
            <main>
                <h1>To-Do List</h1>
                <ul className="todo-list">
                    {taskComponents}
                </ul>
            </main>
        )
    }
}

export default MainContent;

