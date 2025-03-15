import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return <h1>{message}</h1>;
}
