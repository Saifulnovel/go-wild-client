import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Review = () => {
  const navigate = useNavigate()
  useTitle("Reviews");
  const service = useLoaderData();

  const [review, setReview] = useState({});
  const { id } = useParams();

  const handlePost = (e) => {
    e.preventDefault();
    
    const update = { ...service, review };
    console.log(update);
    fetch(`https://y-coral-gamma.vercel.app/photos/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
    navigate("/services");

  };
  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...review };
    data[name] = value;
    setReview(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-green-300">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Please Review</h1>
          </div>
          <div className="card w-full  shadow-2xl bg-slate-100">
            <form onSubmit={handlePost} className="card-body">
              <div className="form-control">
                <input
                  onBlur={handleBlur}
                  name="userName"
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  onBlur={handleBlur}
                  name="ratings"
                  placeholder="Ratings"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <textarea
                  onBlur={handleBlur}
                  name="reviews"
                  className="textarea textarea-bordered"
                  placeholder="Write your Personal Feedback"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;