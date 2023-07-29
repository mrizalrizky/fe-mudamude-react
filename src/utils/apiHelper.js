import axios from "axios";

exports.axiosGet = (paramType, endpoint, params) => {
  switch (paramType) {
    case "query":
      return axios.get(
        `${process.env.REACT_APP_API_URL}/${endpoint}/${params}`
      );

    case "body":
      return axios.get(`${process.env.REACT_APP_API_URL}/${endpoint}`, params);

    case "param":
      return axios.get(
        `${process.env.REACT_APP_API_URL}/${endpoint}/${params}`
      );

    default:
      break;
  }
};
