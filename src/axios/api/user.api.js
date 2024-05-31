import privateAxiosRequest from "../config/private.client";
const userApi = {
  userSignin: async (email, password) => {
   
      const endpoints = "/user/login";
      const response = await privateAxiosRequest.post(endpoints, {
        email,
        password,
      });
      const data = await response;
      if(!data) throw new Error('something/...')

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
  }

  
};


export default userApi;
