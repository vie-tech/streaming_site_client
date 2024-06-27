import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import guestApi from "../axios/api/guest.api.js";
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
} from "@stream-io/video-react-sdk";
import AudienceVideo  from './segments/AudienceVideo.jsx'
import Spinner from '../assets/utility/Spinner'
import FailedConnection from '../assets/utility/Spinner'


const AudienceCredentialFetching = () => {
  const { isLoggedIn } = useSelector((state) => state.appState);
  const apiKey = "s6b78s6su45k";
  const [token, setToken] = useState("");
  const [guestId, setGuestId] = useState("");
  const [callId, setCallId] = useState("");
  const user = {
    id: localStorage.getItem("guestId"),
    role: 'guest'
  };

  useEffect(() => {
    async function init() {
      const guestId = localStorage.getItem("guestId");
      setGuestId(guestId);
      const channelToJoin = localStorage.getItem("channel_to_join");
      setCallId(channelToJoin);
      if (isLoggedIn) {
        const response = await guestApi.getJwtTokenForGuest(guestId);
        setToken(response);
      } else {
        setToken(null);
      }
    }

    init();
  }, [isLoggedIn]);

  if (!guestId || !callId || !user) {
    return <Spinner/>;
  }

  return (
    <Audience
      apiKey={apiKey}
      callId={callId}
      token={token}
      user={user}
      isLoggedIn={isLoggedIn}
    />
  );
};

const Audience = ({ apiKey, callId, token, user, isLoggedIn }) => {
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null)
  

  

  
  
  useEffect(()=>{
 let clientInstance;
  if(isLoggedIn){
    clientInstance = new StreamVideoClient({ apiKey, token, user });
  }else{
    clientInstance = new StreamVideoClient({ apiKey, token, user });
  }
  setClient(clientInstance)

  const call = clientInstance.call('livestream', callId)
  
  call.join().then((callInstance)=>{
      callInstance.camera.disable();
      callInstance.microphone.disable();
  }).catch(error => {
    console.error('Error joining the call:', error);
  });

  setCall(call)

  return () => {
    call.leave().then(()=>{
      console.log('You left the call')
    }).catch(()=>{
      console.log('error leaving call')
    })
  };
  }, [])

 return (
  <>
   <StreamVideo client={client}>
      <StreamCall call={call}>
       <AudienceVideo/>
      </StreamCall>
    </StreamVideo>
  </>
 )

  
};

export default AudienceCredentialFetching;
