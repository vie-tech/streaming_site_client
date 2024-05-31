import React, { useState, useEffect } from "react";
import {
  useCall,
  useCallStateHooks,
  ParticipantView,
} from "@stream-io/video-react-sdk";
import Spinner from "../../assets/utility/Spinner";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useDispatch, useSelector } from "react-redux";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

const AudienceVideo = () => {
  const { isLoggedIn } = useSelector((state) => state.appState);
  const [open, setOpen] = React.useState(true);

  const call = useCall();
  const navigate = useNavigate();
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();
  const [message, setMessage] = useState();
  // Assuming the host is identified by a specific role or the first participant
  const hostParticipant =
    participants.find((participant) => participant.role === "host") ||
    participants[0];

  // State to handle camera mute

  const handleLeave = () => {
    call.leave();
    navigate("/");
  };
  console.log(hostParticipant);

  const reactions = participants.map((p) => p.reaction);

  async function sendReaction() {
    if (!isLoggedIn) {
      setOpen(true);
      setMessage("Sign up to send reaction");
      return;
    }
    await call.sendReaction({
      type: "raised-hand",
      emoji_code: ":raise-hand:",
      custom: { clearAfterTimeout: true },
    });
  }

  return (
    <>
       <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            position: 'absolute',
            top: 0,
            zIndex: 10,
          }}
        >
          {message && (
            <Collapse in={open}>
              <Alert
                color="warning"
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {message}
              </Alert>
            </Collapse>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            marginTop: '50px'  // Ensure some space from the top
          }}
        >
          <Card sx={{ width: 600 }}>
            <CardContent sx={{ position: "relative", padding: 0 }}>
              {hostParticipant ? (
                <>
                  <ParticipantView participant={hostParticipant} />
                  {reactions && reactions}
                </>
              ) : (
                <Spinner />
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
              <IconButton variant="contained" color="error" onClick={handleLeave}>
                <ExitToAppIcon />
              </IconButton>
              <IconButton></IconButton>
              <Box>
                <IconButton onClick={sendReaction} color="primary">
                  <ThumbUpIcon />
                </IconButton>
                <IconButton color="secondary">
                  <ThumbDownAltIcon />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default AudienceVideo;
