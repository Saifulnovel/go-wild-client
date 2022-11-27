import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData()
    useTitle('Details')
    
    console.log(serviceDetail);
    return (
      <div>
        <div key={serviceDetail._id} className="mx-auto border rounded-lg">
          <div className=" bg-base-100 shadow-xl">
            <PhotoProvider>
              <PhotoView src={serviceDetail.picture}>
                <figure>
                  <img
                    className="w-full"
                    src={serviceDetail.picture}
                    alt="animals"
                  />
                </figure>
              </PhotoView>
            </PhotoProvider>
            <div className="card-body">
              <h2 className="text-2xl font-serif card-title">
                {serviceDetail.name}
              </h2>
              <p>{serviceDetail.details}</p>
              <div className="card-actions mt-2 justify-between">
                <div>
                  Price:{" "}
                  <span className="badge badge-secondary">
                    {serviceDetail.price}$
                  </span>{" "}
                </div>
                <p>
                  <span className='tect-4xl font-semibold'>Place</span>:{serviceDetail.place}
                </p>
                <Link to={`/reviewForm/${serviceDetail._id}`}>
                  <button className="btn btn-primary">Review</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;