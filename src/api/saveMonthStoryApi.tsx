import axios from "../utils/axios";
import setAuthToken from "../utils/setAuthToken";

export const saveMonthStoryApi = async (data: any) => {
  console.log(data);
  try {
    const res = await axios.post(
      "api/story/add-month-story",
      data,
      setAuthToken()
    );
    return {
      status: 200,
      message: res.data.message,
    };
  } catch (error: any) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message", error.message);
    }
    return {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
