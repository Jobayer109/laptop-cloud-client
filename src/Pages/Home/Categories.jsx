import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <section>
      <div className="flex w-[50%] mx-auto mt-16">
        <input
          type="search"
          placeholder="Search laptop"
          className="w-96 p-3 rounded-l-lg border border-green-500"
        />
        <button
          type="button"
          className="w- p-3 font rounded-r-lg bg-green-600 hover:bg-green-700 text-white"
        >
          Subscribe
        </button>
      </div>
      <h3 className="text-2xl mb-6  font-bold">
        {" "}
        <span className="text-3xl text-green-600 font-bold">C</span>ategories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 mt-10 bg-green- p-4 rounded-lg shadow-">
        {categories?.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;