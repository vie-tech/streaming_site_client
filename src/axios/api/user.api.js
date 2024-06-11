import privateAxiosRequest from "../config/private.client";

const userApi = {
  userSignin: async (email, password) => {
    const endpoints = "/user/login";
    const response = await privateAxiosRequest.post(endpoints, {
      email,
      password,
    });
    const data = await response;
    console.log(data)
    if (!data) throw new Error("something/...");
    localStorage.setItem('userId', data.user)
    localStorage.setItem('user_call_id', data.user_host_id)
    return data;
  },

  userSignup: async (name, email, password) => {
    try {
      const endpoints = "/user/signup";
      const response = await privateAxiosRequest.post(endpoints, {
        name,
        email,
        password,
      });
      const data = await response.message;
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  getJwtTokenForUser: async (userId)=>{
    try{
        const endpoints = `/guest/get_user_token?userId=${userId}`;
        const response = await privateAxiosRequest.get(endpoints)
        const data = await response.token
        return data
    }catch(err){
        console.log(err.message)
    }
  }
};

export default userApi;
