import React from 'react';
import err from '../../../Main/asset/err.svg'
const ErrorPage = () => {
    return (
      <div>
        <div>
          <img src={err} alt="" />
            </div>
            <div> <h1>NO page found please visit a valid</h1></div>
      </div>
    );
};

export default ErrorPage;