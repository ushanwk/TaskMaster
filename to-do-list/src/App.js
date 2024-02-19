import './App.css';
import {InputField} from "./Components/InputField";
import React, {useState} from "react";
import {Task} from "./Components/Task";
import {CompletedTask} from "./Components/CompletedTask";

function App() {

    const [tasks, setTasks] = useState([]);

    return (
        <div className="App">

            <section className="section">
                <h1 id="app-name">Task Master</h1>

                {
                    tasks.map((t, index) => (
                        t.isDone === false &&
                        <Task index={index} taskName={t.taskName} prev={tasks} set={setTasks}/>
                    ))
                }

                <div className="line"></div>

                {
                    tasks.map((t) => (
                        t.isDone === true && <CompletedTask taskName={t.taskName} />
                    ))
                }

                <a
                    className="clear"
                    onClick={() => (setTasks([]))}
                >Clear</a>

                <InputField setTasks={setTasks} prev={tasks}/>
            </section>

        </div>
    );
}

export default App;
