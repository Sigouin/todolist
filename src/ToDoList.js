import React from 'react'
import ToDo from './ToDo'
import { Container, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material'
import { CheckCircle, Delete, ModeEdit } from '@mui/icons-material'


 const handleDelete = (task) => {
    console.log(handleDelete(task))
}

const handleEdit = (task) => {
    console.log(handleEdit(task))
}

const ToDoList = ({toDoList}) => {
return (
        <Container maxWidth="md">
            {!toDoList.length
                ?
                <Typography variant="h6" color="error">No Data to display</Typography>
                :
                (<List>
                    {toDoList.map(todo => {
                        return (
                            <ListItem key={todo.id} button>
                                <ListItemIcon>
                                    <CheckCircle color="primary" />
                                </ListItemIcon>

                                <ListItemText primary={todo.task} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(todo.task)}>
                                        <ModeEdit />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.task)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
            }
        </Container>

)
        }
export default ToDoList;
