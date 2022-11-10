import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";


const AddServices = () => {
  useTitle("Add Services");
  const [photo, setphoto] = useState({});
  const handlePost = (e) => {
    e.preventDefault();
    // console.log(foodItems);
    fetch("https://y-coral-gamma.vercel.app/photos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(photo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...photo };
    data[name] = value;
    setphoto(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card w-full  shadow-2xl bg-base-100">
            <form onSubmit={handlePost} className="card-body">
              <div className="form-control">
                <input
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                  placeholder="Name of Your Service"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="picture"
                  placeholder="Image Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  onBlur={handleBlur}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  onBlur={handleBlur}
                  name="details"
                  className="textarea textarea-bordered"
                  placeholder="Details about your Services"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
