import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    
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
          <Link to="/courseindex">
            <button className="btn btn-wide btn-warning rounded-md hover:bg-white">
              Get Our Services
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Home;