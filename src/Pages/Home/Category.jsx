import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category, isLoading }) => {
  const { img, id } = category;
  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="card shadow-md hover:-translate-y-1 duration-300 ease-in hover:bg-green-50">
      {" "}
      <Link to={`/category/${id}`}>
        <div className="card-body items-center text-center">
          <img src={img} alt="" className="h-8" />
        </div>
      </Link>
    </div>
  );
};

export default Category;
