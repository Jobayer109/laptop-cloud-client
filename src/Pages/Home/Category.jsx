import React from "react";

const Category = ({ category }) => {
  const { img } = category;
  return (
    <div className="card shadow-md hover:-translate-y-1 duration-300 ease-in">
      <div className="card-body items-center text-center">
        {/* <h2 className="card-title">{name}</h2> */}
        <img src={img} alt="" className="h-8" />
      </div>
    </div>
  );
};

export default Category;
