import {useState} from "react";

export function InputField({ setTasks, prev }) {
    const [newTaskName, setNewTaskName] = useState("");

    const handleInputChange = (event) => {
        setNewTaskName(event.target.value);
    };

    const handleAddTask = () => {
        setTasks([
            ...prev,
            {
                taskName: newTaskName,
                isDone: false,
            }
        ]);

        setNewTaskName("");
    };

    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    className="input-field"
                    placeholder="What's new..."
                    value={newTaskName}
                    onChange={handleInputChange}
                />

                <button className="add-button" onClick={handleAddTask}>
                    Add
                </button>
            </div>
        </>
    );
}
