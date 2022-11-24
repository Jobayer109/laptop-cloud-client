import React from "react";

const Category = ({ category }) => {
  const { img } = category;
  return (
    <div className="card w-80">
      <div className="card-body items-center text-center">
        {/* <h2 className="card-title">{name}</h2> */}
        <img src={img} alt="" className="h-8" />
      </div>
    </div>
  );
};

export default Category;
