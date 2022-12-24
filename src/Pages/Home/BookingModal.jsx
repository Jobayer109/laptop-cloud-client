import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ details, setDetails }) => {
  const { user } = useContext(AuthContext);
  const { name, img, resale_price, _id } = details;
  console.log(details);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const customer = user?.displayName || form.customer.value;
    const email = user?.email || form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = {
      laptopName: name,
      customer,
      email,
      phone,
      location,
      img,
      price: resale_price,
      bookingId: _id,
    };
    console.log(booking);

    fetch(`https://laptop-cloud-server.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "Booking Successful!", "success");
          setDetails(null);
        }
        console.log(data);
      });
  };

  return (
    <div>
      <input type="checkbox" id="laptop-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="laptop-modal"
            className="btn btn-sm bg-red-600 hover:bg-red-700 btn-circle absolute right-5 top-3"
          >
            ✕
          </label>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              name="laptop"
              defaultValue={name}
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Customer name"
              name="customer"
              className="input input-bordered w-full "
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
              disabled
            />{" "}
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              placeholder="Meeting location"
              name="location"
              className="input input-bordered w-full "
              required
            />
            <br />
            <input
              className="border w-full bg-green-600 text-white px-2 py-2 rounded-md font-semibold hover:bg-green-700 translate duration-300 ease-in"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
