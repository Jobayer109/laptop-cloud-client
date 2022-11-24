import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { img, id } = category;
  return (
    <div className="card shadow-md hover:-translate-y-1 duration-300 ease-in">
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
