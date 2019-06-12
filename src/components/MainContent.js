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

    addZero(i) {
        if (i < 10) i = "0" + i;
        return i;
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

        const date = new Date();
        const hour = date.getHours();
        const minutes = this.addZero(date.getMinutes());
        let timeOfDay;

        const styles = {};
        if(hour < 12) {
            timeOfDay = "morning";
            styles.color = "yellow";
        }
        else if(hour >= 12 && hour <= 17) {
            timeOfDay = "afternoon";
            styles.color = "orange";
        }
        else {
            timeOfDay = "night";
            styles.color = "royalblue";
        }

        return (
            <main>
                <h2>It is currently {hour % 12}:{minutes}.</h2>
                <h3 style={styles}>Good {timeOfDay}!</h3>
                <ul className="todo-list">
                    {taskComponents}
                </ul>
            </main>
        )
    }
}

export default MainContent;

