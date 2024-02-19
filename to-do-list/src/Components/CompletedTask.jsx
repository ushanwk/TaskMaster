import accept from "../Assests/Image/accept.png"

export function CompletedTask({ taskName }) {
    return (
        <>
            <div className="task">
                <div className="task-block">
                    <div className="task-side-bar"></div>
                    <h4 className="task-name">{taskName}</h4>
                </div>

                <img className="rigth-img" src={accept}/>
            </div>
        </>
    )
}
