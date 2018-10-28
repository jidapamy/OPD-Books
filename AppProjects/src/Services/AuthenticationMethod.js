import axios from "../Lib/Axois"

export const login = async (data) => {
  let res = await axios.post('/auth/login', data)
  return res.data
};

export const verifyEmail = async (hashCode) => {
  let res = await axios.post('/auth/verifyEmail', { hashCode: hashCode })
  return res.data
};
