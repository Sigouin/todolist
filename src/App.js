import { AppBar, Box } from "@mui/material";
import CreateTask from "./components/CreateTask";


function App() {
    return (
        <div>
        <Box textAlign='center' sx={{ flexGrow: 1 }}>
        <AppBar 
        style={{
            backgroundColor: "#673ab7",
          }} 
        position="static"> Todo App
                </AppBar>
                </Box>
        <CreateTask />
        </div>
    
    )
}

export default App;