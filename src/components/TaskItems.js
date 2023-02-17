import  './TaskItems.css';
import TaskDate from './TasKDate'
function TaskItems(abc){
    
    
    return (
        <div className = "task-item">
            <TaskDate
            date = {abc.date}

            ></TaskDate>
            <div className= "task-item__description">  {abc.title}</div>
            <div className ="task-item__priority">{abc.priority}</div>
        </div>
    );
}
export default TaskItems;