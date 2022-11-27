import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Context/auth-context';

const MyReview = ({ reviewData }) => {
    const { user } = useContext(AuthContext)
    console.log(user.photoURL);
    const { review, name } = reviewData;
    
    return (
      <div>
        <div className="grid border my-2 rounded-lg glass grid-cols-1 lg:grid-cols-3">
          <div className=" flex-col mx-auto">
            <img src={user.photoURL} className="w-40 rounded-lg my-2" alt="" />
            <p className="text-lg">
              User Name:{review ? review.userName : "No user Name"}{" "}
            </p>
          </div>
          <div className="grid text-left col-span-2">
            {review ? (
              <>
                <h3 className="text-3xl text-center">
                  {" "}
                  <span className="text-orange-700">{name}</span> reviews
                </h3>
                <p>
                  <span>Ratings: </span>
                  {review?.ratings}
                </p>
                <p>
                  <span>Your Review: </span>
                  {review?.reviews}
                            </p>
                            <button className='btn btn-circle btn-error'><FaTrash/></button>
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