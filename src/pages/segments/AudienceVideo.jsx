import React from 'react';
import {
  useCall,
  useCallStateHooks,
  ParticipantView,
} from "@stream-io/video-react-sdk";
import Spinner from '../../assets/utility/Spinner'

const AudienceVideo = () => {
  const call = useCall();
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();

  // Assuming the host is identified by a specific role or the first participant
  const hostParticipant = participants.find(participant => participant.role === 'host') || participants[0];

  return (
    <>
      {hostParticipant ? (
        <ParticipantView participant={hostParticipant} />
      ) : (
        <Spinner/>
      )}
    </>
  );
};

export default AudienceVideo;
