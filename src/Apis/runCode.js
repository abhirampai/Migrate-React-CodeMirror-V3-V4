import axios from "axios";

const clientId = process.env.REACT_APP_JDOODLE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_JDOODLE_CLIENT_SECRET;

export const runCode = (payload) =>
  axios.post(
    "https://api.jdoodle.com/v1/execute",
    {
      ...payload,
      clientId,
      clientSecret
    },
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }
  );
