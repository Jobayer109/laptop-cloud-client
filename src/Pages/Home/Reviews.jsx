import React from "react";
import person1 from "../../assets/icons/person1.jpeg";
import person2 from "../../assets/icons/person2.jpeg";
import person3 from "../../assets/icons/person3.jpeg";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      comment:
        "HP's Pavilion Laptop 14 (2022) is a well-rounded budget model with peppy performance and a decent feature set for the money.",
      image: person1,
      name: "Jobayer Ahmed",
      country: "Rangpur",
      rating: 4.5,
    },
    {
      id: 2,
      comment:
        "It's over three pounds and nearly 3,000 bucks, but Dell's Latitude 9430 2-in-1 is a first-class business convertible.",
      image: person2,
      name: "Sirajul Islam",
      country: "Dhaka",
      rating: 4.9,
    },
    {
      id: 3,
      comment:
        "With Microsoft no longer supporting Windows 8.1 after January 2023, now’s the time to upgrade.",
      image: person3,
      name: "Abu Rahat",
      country: "Mymensingh",
      rating: 4.3,
    },
  ];
  return (
    <section className=" bg-no-repeat my-16 ">
      <div>
        {/* <div className="lg:flex items-center justify-between">
          <div>
            <h4 className="font-bold text-primary text-lg mb-3">Testimonial</h4>
            <h2 className="text-3xl font-bold">What Our Patients Says</h2>
          </div>
        </div> */}
        <h3 className="text-2xl mb-6  font-bold">
          {" "}
          <span className="text-3xl text-green-600 font-bold">C</span>ustomer Reviews
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
