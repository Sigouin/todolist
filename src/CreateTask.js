import React, { useState } from 'react'
import { Button, Container, Grid, Paper, TextField } from '@mui/material';



const CreateTask = ({ addTask }) => {
    const [task, setTask] = useState('');
    
 
    const handleChange = (e) => {
      setTask(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(task);
      setTask("");
    }
    


    return (
      
      <Paper elevation={3}>
      <Container maxWidth="sm">
        <Grid container alignItems="center">
        <TextField value={task} onChange={handleChange} 
                     id="outlined-basic" fullWidth label="Enter Task..." multiline variant="outlined" />
          <form onSubmit={handleSubmit}>
                 <Grid item md={12}>
           <Button type="submit" variant="contained" style={{backgroundColor: "#673ab7"}}>ADD</Button>
        </Grid>
        
        
          </form>
        </Grid>
      </Container>
      
      
    </Paper>

    )
}

export default CreateTask