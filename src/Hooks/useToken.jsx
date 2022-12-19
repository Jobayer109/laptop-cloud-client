import { useEffect, useState } from "react";

const useToken = (email) => {
  const [isToken, setIsToken] = useState("");
  console.log("From useToken:", email);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-cloud-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === true) {
            setIsToken(data.token);
            localStorage.setItem("Token", data.token);
          }
          console.log(data.token);
        });
    }
  }, [email]);
  return [isToken];
};

export default useToken;
