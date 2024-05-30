import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = ()=>{
    return (
        <Box sx={{
             display: 'flex' ,
             justifyContent: 'center',  // Center horizontally
             alignItems: 'center',  // Center vertically
             height: '100vh', 
             }}>
          <CircularProgress />
        </Box>
      )
}


export default Spinner