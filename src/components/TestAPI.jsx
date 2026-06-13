import { useEffect } from "react";
import axios from "axios";

export default function TestAPI() {
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1", {
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY
      }
    })
    .then(res => console.log("GET DATA:", res.data))
    .catch(err => console.error("GET ERROR:", err));
  }, []);

  return null;
}