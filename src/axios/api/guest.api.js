import privateAxiosRequest from "../config/private.client";


const guestApi = {
    generateIdForGuestUser: async ()=>{
        try{
            const endpoints = '/guest/get_guestId'
            const response = await privateAxiosRequest.get(endpoints)
            console.log(response)
            const {guestId, callId} = await response
            localStorage.setItem('guestId', guestId)
            localStorage.setItem('guest_call_id', callId )
        }catch(err){
            console.log(err)
        }
    
    }, 

    getAllLiveGuestStreams: async()=>{
        try{
            const endpoints = '/guest/get_all_guest_live_streams'
            const response = await privateAxiosRequest.get(endpoints)
            const data = await response
            return data
        }catch(err){
            console.log(err)
        }
    },

    getJwtTokenForGuest: async(guestId)=>{
        try{
            const endpoints = `/guest/get_guest_token?userId=${guestId}`;
            const response = await privateAxiosRequest.get(endpoints)
            const data = await response.token
            return data
        }catch(err){
            console.log(err.message)
        }
    }, 

    createRoomIdForGuestHost: async(guestId)=>{
        try{
            const endpoints = `/guest/create_room_id?guestId=${guestId}`
            const response = await privateAxiosRequest.get(endpoints)
            const data = await response.roomName
            return data
        }catch(err){
            console.log(err.message)
        }
    
    },

    endCallForGuest: async (guestId)=>{
        try{
            const endpoints = `/guest/end_guest_call?guestId=${guestId}`
            const response = await privateAxiosRequest.put(endpoints)
            const data = await response 
            console.log(data)
        }catch(err){
            console.log(err.message)
        }
    }

}
 

export default guestApi
