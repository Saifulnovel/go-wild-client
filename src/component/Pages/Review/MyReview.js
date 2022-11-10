import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/auth-context';

const MyReview = ({ reviewData }) => {
    const {user} = useContext(AuthContext)
    const { review, name } = reviewData;
    console.log(reviewData);
    return (
      <div>
        <div className="grid border my-2 rounded-lg glass grid-cols-1 lg:grid-cols-3">
          <div className=" flex-col mx-auto">
            <img  src={user.photoURL} className="w-40 rounded-lg my-2" alt="" />
            <p className="text-lg">
              User Name:{review ? review.userName : "No user Name"}{" "}
            </p>
          </div>
          <div className="grid text-left col-span-2">
            {review ? (
              <>
                <h3 className="text-3xl text-center">
                  Here is Review for{" "}
                  <span className="text-orange-700">{name}</span>
                </h3>
                <p>
                  <span>Your Retings: </span>
                  {review?.ratings}
                </p>
                <p>
                  <span>Your Review: </span>
                  {review?.reviews}
                </p>
              </>
            ) : (
              <h4 className="text-center flex items-center">
                No reviews Yet for:{" "}
                <span className="text-orange-700 text-lg"> {name}</span>
              </h4>
            )}
          </div>
        </div>
      </div>
    );
};

export default MyReview;