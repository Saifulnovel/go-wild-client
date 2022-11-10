import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Review = () => {
  useTitle('Reviews')
    return (
      <div className="flex justify-center mb-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Write a Review here</h2>
            <input
              type="text"
              placeholder="Write your opinion"
              className="input input-bordered"
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;