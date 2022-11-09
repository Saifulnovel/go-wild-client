import React from 'react';
import err from '../../../Main/asset/err.svg'
const ErrorPage = () => {
    return (
      <div className="flex-row">
        <div>
          {" "}
          <h1 className='text-6xl font-serif font-extrabold'>NO page found please visit a valid page</h1>
        </div>
        <div className='mt-5 relative left-52'>
          <img src={err} alt="" />
        </div>
      </div>
    );
};

export default ErrorPage;