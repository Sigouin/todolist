import { useState } from 'react'
import { Box, Button, IconButton, List, ListItem, ListItemText, Paper, TextField } from '@mui/material';
import { CheckCircle, Delete } from '@mui/icons-material';


function CreateTask(){
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState([]);
 
    const handleClick = () => {
      const id = todoList.length + 1;
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: task,
        },
      ]);
      setTask("")
    };
    console.log(handleClick)





return (
    <div>
      <Paper elevation={3}>
        <TextField fullWidth label="Enter Title" id="fullWidth" value={task} onInput={(e) => setTask(e.target.value)}/>
        <Box textAlign='center'>
          <Button style={{backgroundColor: "#673ab7"}} variant="contained" onClick={handleClick}>Add</Button></Box>
        </Paper>
        <div>

          <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  }
                >
                      <CheckCircle style={{dark: "#673ab7"}} />

                  <ListItemText
                    primary={task}
                  />
                </ListItem>,
            </List>
        </div>
    </div>
    );
}

// Icons 
// ModeEdit - pencil
// Delete - trashcan
// CheckCircle - Yea




export default CreateTask