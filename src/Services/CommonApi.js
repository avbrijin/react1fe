import axios from "axios";


const CommonApi = async (method, url, reqBody) => {
  let configObj = {
    url: url,
    method: method,
    data: reqBody,
  };
  return await axios(configObj)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default CommonApi;
