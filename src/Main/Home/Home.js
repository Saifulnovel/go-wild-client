import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo4 from '../asset/logo4.svg'
import logo55 from '../asset/logo55.svg'
import logo6 from '../asset/logo6.jpg'
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Home = () => {
  const [data, setData] = useState([]);
  useTitle("Home")

  useEffect(() => {
    fetch("https://y-coral-gamma.vercel.app/photos?limit=3")
      .then((res) => res.json())
      .then((data) => setData(data.photos));
    
  }, []);

    
    return (
      <div>
        <div className="header bg-slate-700 mx-auto text-center py-16 transition-all">
          <div className="">
            <h1 className="text-zinc-50 text-6xl font-bold  py-16  top-1/4">
              Closer To Nature
            </h1>
          </div>
          <div className="desc text-zinc-200 text-2xl font-normal mb-8">
            {/* <p> “One touch of nature makes the whole world kin.”</p> */}
            <p>
              “Look deep into nature, <br /> and then you will understand
              everything better. <br /> Adopt the pace of nature: her secret is
              patience.”{" "}
            </p>
          </div>
          <Link to="/signup">
            <button className="btn btn-wide btn-warning rounded-md hover:bg-white">
              Go for it
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-6xl font-serif font-bold">Get our services</h1>
        </div>
        {/*
        --------------------------------------
        service 3item are here 
        ------------------------------------ 
        */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center mt-10">
          {data.map((services) => (
            <div key={services._id}>
              <div className="">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <PhotoProvider>
                    <PhotoView src={services.picture}>
                      <figure>
                        <img
                          className=" min-h-full max-h-72"
                          src={services.picture}
                          alt="animals"
                        />
                      </figure>
                    </PhotoView>
                  </PhotoProvider>
                  <div className="card-body">
                    <h2 className=" text-2xl font-serif card-title">
                      {services.name}
                    </h2>
                    <p>{services.details.slice(0, 100)}...</p>
                    <div className="mt-2 card-actions justify-between">
                      <div>
                        Price:{" "}
                        <span className="badge badge-secondary">
                          {services.price}$
                        </span>{" "}
                      </div>
                      <Link to={`/services/${services._id}`}>
                        <button className="btn btn-primary">Veiw more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          ))}
        </div>

        {/* 
        --------------------------------------
        see more service
        --------------------------------------
         */}
        <div className="flex justify-end mt-5">
          <Link to="/services">
            {" "}
            <button className="btn btn-secondary btn-wide">
              See more services
            </button>
          </Link>
        </div>
        {/*
          ---------------------------------------
          extra section 1
          ---------------------------------------
           */}
        <div className="flex gap-10 justify-center mt-48 border  flex-col lg:flex-row mb-2">
          <div className="card lg:w-1/3 sm:w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-4/5" src={logo55} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Landscape Photography
                <div className="badge badge-secondary"></div>
              </h2>
              <p>
                “Photography is like exploring a new dimension, only I can go
                there but I can show you where I've been.” <br />{" "}
                <small className="text-warning">― Destin Sparks</small>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Contact us</div>
                <div className="badge badge-outline">Follow us</div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/3 sm:w-full bg-base-100 shadow-xl">
            <figure>
              <img className="" src={logo4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Photography Widely
                <div className="badge badge-secondary"></div>
              </h2>
              <p>
                “What i like about photographs is that they capture a moment
                that’s gone forever, impossible to reproduce.” <br />
                <small className="text-warning">― Karl Lagerfeld</small>
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Contact us</div>
                <div className="badge badge-outline">Follow us</div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        ------------------------------------------
        extra section 2
        ------------------------------------------
        */}
        <div className="container">
          <div className="card lg:card-side bg-base-100 border py-2 mt-52 container shadow-2xl">
            <figure>
              <img className="w-3/4 m-5 rounded-lg" src={logo6} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-serif text-4xl">
                How To Nail the Perfect Shot while Shooting Wildlife
              </h2>
              <p>
                Animals, especially wild ones, are going to do what they please
                and when they please. Unlike humans, you cannot ask them to pose
                one way or face the light source. You have to be quick on your
                feet and as well as with your fingers. It’s not just important
                to know how to work a camera, wildlife photographers need to
                acquire other skills too, some of them life-saving.{" "}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;