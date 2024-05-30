import Box from '@mui/material/Box';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';


const FailedConnection = ()=>{
    return (
        <>
        <Box
        sx={{
            display: 'flex' ,
            justifyContent: 'center',  // Center horizontally
            alignItems: 'center',  // Center vertically
            height: '100vh', 
            }}
        >
<SignalWifiStatusbarConnectedNoInternet4Icon/>

        </Box>
        </>
    )
}