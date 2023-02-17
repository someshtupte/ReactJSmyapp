import "./TaskDate.css"
function TaskDate(abc){

    const month  = abc.date.toLocaleString('en-US',{month : "long"});
    const day = abc.date.toLocaleString('en-US',{day : "2-digit"});
    const year = abc.date.getFullYear();

    return(
        <div className = "task-date">
            <div className = "task-date__month">{month}</div>
            <div className = "task-date__year">{year}</div>
            <div className = "task-date__day">{day}</div>
        </div>
    )

}
export default TaskDate;