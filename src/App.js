import './App.css';
import TaskItems from './components/TaskItems'; 
function App() {
const items = [
  { 
    id : "1",
    title : "Blockchain course",
    priority : 1,
    date : new Date (2021,2,19),
  },
  
  { 
    id : "2",
    title : "ReactJS course",
    priority :4,
    date : new Date (2021,2,20),
  },
  
  { 
    id : "3",
    title : "Ethereum course",
    priority : 3,
    date : new Date (2021,2,21),
  },
  
  { 
    id : "4",
    title : "Blockchain course",
    priority : 2,
    date : new Date (2021,2,22),
  }
]

  return (
  <div>  
    <h1> Hello to My Todo List App</h1>
    <TaskItems
    date= {items[0].date}
    title= {items[0].title}
    priority = {items[0].priority}
    
     ></TaskItems>
     <TaskItems
    date= {items[1].date}
    title= {items[1].title}
    priority = {items[1].priority}
    
     ></TaskItems>
     <TaskItems
    date= {items[2].date}
    title= {items[2].title}
    priority = {items[2].priority}
    
     ></TaskItems>
     <TaskItems
    date= {items[3].date}
    title= {items[3].title}
    priority = {items[3].priority}
    
     ></TaskItems>
  </div>
  );
}

export default App;
