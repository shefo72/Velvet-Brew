import toast from "react-hot-toast";
import { setUser } from "../store/userSlice";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginApi(email, password) {
  const response = await axios.post(`${BASE_URL}/login.php`, {
    email,
    password,
  });
  return response.data;
}

export async function signUpApi(values) {
  const response = await axios.post(`${BASE_URL}/signup.php`, {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    phone: values.phone,
    birthday: values.birthday,
    password: values.password,
  });
  return response.data;
}
