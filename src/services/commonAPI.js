import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody, isFormData = false) => {
  const headers = isFormData
    ? { "Content-Type": "multipart/form-data" }
    : { "Content-Type": "application/json" };

  try {
    const response = await axios({
      method: httpMethod,
      url,
      data: reqBody,
      headers: headers,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export default commonAPI;
