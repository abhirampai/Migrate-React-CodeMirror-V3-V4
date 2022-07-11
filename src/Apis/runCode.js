import axios from "axios";

const clientId = process.env.REACT_APP_JDOODLE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_JDOODLE_CLIENT_SECRET;

const base_url = "https://api.jdoodle.com/v1/execute";

export const runCode = (payload) =>
  axios.post(base_url, {
    ...payload,
    clientId,
    clientSecret,
  });
