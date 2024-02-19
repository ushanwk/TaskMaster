export function Task({ taskName, prev, index, set }) {

    const toggleDone = () => {
        const t = [...prev];
        t[index].isDone = true;
        set(t);
    }

    return (
        <div className="task">
            <div className="task-block">
                <div className="task-side-bar"></div>
                <h4 className="task-name">{taskName}</h4>
            </div>

            <a
                className="btn"
                onClick={toggleDone}
            >Done</a>
        </div>
    )
}
