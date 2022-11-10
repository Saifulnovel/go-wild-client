import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData()
    
    console.log(serviceDetail);
    return (
      <div>
       
      </div>
    );
};

export default ServiceDetails;