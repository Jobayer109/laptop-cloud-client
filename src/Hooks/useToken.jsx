import { useEffect, useState } from "react";

const useToken = (email) => {
  const [isToken, setIsToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsToken(data.token);
          localStorage.setItem("Token", data.token);
          console.log(data);
        });
    }
  }, [email]);
  return [isToken];
};

export default useToken;
