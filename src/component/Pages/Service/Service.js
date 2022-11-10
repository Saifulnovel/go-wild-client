import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const serviceData = useLoaderData()
    return (
      <div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center mt-10">
          {data.map((services) => (
            <div key={services._id}>
              <div className="">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className=" min-h-full max-h-72"
                      src={services.picture}
                      alt="animals"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{services.name}</h2>
                    <p>{services.details.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Veiw more</button>
                    </div>
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