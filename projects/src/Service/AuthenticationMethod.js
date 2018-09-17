import axios from "./../Lib/axois"

export const login = async (data) => {
  let res = await axios.post('/auth/login', data)
  return res.data
};
