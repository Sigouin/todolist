import { AppBar, Box } from "@mui/material";
import CreateTask from "./CreateTask";
import ToDoList from "./ToDoList";
import React, {useState} from 'react';
import data from './data.json'


// useState hook deconstructed into array. [Variable, method used to update]
function App() {
    const [ toDoList, setToDoList ] = useState(data);

    console.log(setToDoList)


    const addTask = (task) => {
        let copy =  [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: task, complete: false }];
        setToDoList(copy);
    }
   
   
   return (
     <div className="App">
       {/* Header */}
       <Box textAlign='center' sx={{ height:60, flexGrow: 1 }}>
        <AppBar 
            style={{ height: 50,
            backgroundColor: "#673ab7",
          }} 
            position="static"> Todo App
                </AppBar>
                </Box>
                <CreateTask addTask={addTask} />
                <ToDoList toDoList={toDoList}/>
      
     </div>
   );
  }
   
  export default App;