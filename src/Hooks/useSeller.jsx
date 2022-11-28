import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState("");
  const [isSellerLoading, setIsSellerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/seller/${email}`, {
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
