import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
  const serviceData = useLoaderData()
  const data = serviceData.photos
  console.log(serviceData.photos);
    return (
      <div>
        <div className=" container  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-20 justify-center mt-10">
          {data.map((services) => (
            <div key={services._id} className="mx-auto border rounded-lg">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className=" min-h-full max-h-72"
                    src={services.picture}
                    alt="animals"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl font-serif card-title">
                    {services.name}
                  </h2>
                  <p>{services.details.slice(0, 100)}...</p>
                  <div className="card-actions mt-2 justify-between">
                    <div>
                      Price:{" "}
                      <span className="badge badge-secondary">
                        {services.price}$
                      </span>{" "}
                    </div>
                    <button className="btn btn-primary">Veiw more</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Service;