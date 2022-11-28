import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState("");
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-cloud-server.vercel.app/users/seller/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
