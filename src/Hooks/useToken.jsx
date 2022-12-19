import { useEffect, useState } from "react";

const useToken = (email) => {
  const [isToken, setIsToken] = useState("");
  console.log("Email:", email);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-cloud-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === true) {
            localStorage.setItem("Token", data.token);
            setIsToken(data.token);
          }
          console.log(data.token);
        });
    }
  }, [email]);
  return [isToken];
};

export default useToken;
