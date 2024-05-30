import {
  useCallStateHooks,
  useCall,
  ParticipantView,
  CallingState,
} from "@stream-io/video-react-sdk";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Stop } from "@mui/icons-material";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Spinner from '../../assets/utility/Spinner'
import FailedConnection from '../../assets/utility/Spinner'

const Hostvideo = () => {
  const call = useCall();
  const {
    useIsCallLive,
    useLocalParticipant,
    useParticipantCount,
    useMicrophoneState,
    useCameraState,
    useCallCallingState
   
  } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const totalParticipant = useParticipantCount();
  const isCallLive = useIsCallLive();
  const { microphone, isMute: microphoneMute,  isSpeakingWhileMuted } = useMicrophoneState();
  const { camera, isMute: cameraMute } = useCameraState();
  const callingState = useCallCallingState();

  async function toggleMicOff() {
    if (!microphoneMute) {
      await microphone.disable();
    }
  }

  async function toggleMicOn() {
    if (microphoneMute) {
      await microphone.enable();
    }
  }

  async function toggleCameraOn() {
    if (cameraMute) {
      await camera.enable();
    }
  }

  async function toggleCameraOff() {
    if (!cameraMute) {
      await camera.disable();
    }
  }


  switch (callingState) {
    case CallingState.JOINING:
      return <Spinner/>
      case CallingState.JOINED:
       return  <Box
       sx={{
         display: "flex",
         justifyContent: "center", // Center horizontally
         alignItems: "center", // Center vertically
       }}
     >
       <Card
         sx={{
           width: 600, // Fixed width
           height: 600, // Fixed height
           display: "flex",
           flexDirection: "column", // Ensure content is column-aligned
           justifyContent: "center", // Center content vertically within card
           alignItems: "center", // Center content horizontally within card
           backgroundColor: "#000", // Example background color
         }}
       >
         {localParticipant && (
           <>
             <Box>
               <VisibilityIcon color="primary" /> {totalParticipant}
             </Box>
             <ParticipantView participant={localParticipant} />
           </>
         )}
         <CardContent
           sx={{
             display: "flex",
             justifyContent: "center", // Center content horizontally
             alignItems: "center", // Center content vertically
             backgroundColor: "#27a776", // Example background color
             width: "100%", // Full width to cover card width
             color: "#fff", // White text color for better visibility
           }}
         >
           <Typography level="body-lg" fontWeight="lg">
             <Stack direction="row" spacing={10}>
               <div style={{ alignSelf: "center" }}>
                 {cameraMute ? (
                   <IconButton
                     variant="contained"
                     color="secondary"
                     onClick={toggleCameraOn}
                   >
                     <VideocamOffIcon />
                   </IconButton>
                 ) : (
                   <IconButton
                     variant="contained"
                     color="secondary"
                     onClick={toggleCameraOff}
                   >
                     <VideocamIcon />
                   </IconButton>
                 )}
                 {isCallLive ? (
                   <IconButton
                     variant="contained"
                     color="error"
                     onClick={() => call?.stopLive()}
                     size="large"
                   >
                     <Stop fontSize="large" />
                   </IconButton>
                 ) : (
                   <IconButton
                     variant="contained"
                     color="success"
                     onClick={() => call?.goLive()}
                     size="large"
                   >
                     <PlayArrowIcon fontSize="large" />
                   </IconButton>
                 )}
                 {microphoneMute ? (
                   <IconButton onClick={toggleMicOn}>
                     <MicOffIcon fontSize="small" />
                   </IconButton>
                 ) : (
                   <IconButton onClick={toggleMicOff}>
                     <MicIcon />
                   </IconButton>
                 )}
               </div>
             </Stack>
           </Typography>
         </CardContent>
       </Card>
     </Box>
     case CallingState.RECONNECTING:
      return <Spinner/>
      case CallingState.OFFLINE:
        return <FailedConnection/>
        case CallingState.RECONNECTING_FAILED: 
        return <FailedConnection/>
    default:
      return null
  }

  

  

  


  return (
    <>
     
    </>
  );
};

export default Hostvideo;
