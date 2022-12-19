import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`https://laptop-cloud-server.vercel.app/categories`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-full bg-green-300"></progress>;
  }

  return (
    <section>
      <h3 className="text-2xl mb-6  font-bold mt-20">
        {" "}
        <span className="text-3xl text-green-600 font-bold">C</span>ategories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 mt-10 bg-green- p-4 rounded-lg shadow-">
        {categories?.map((category) => (
          <Category key={category._id} category={category} isLoading={isLoading}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
