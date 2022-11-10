import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import MyReview from "./MyReview";



const ServiceReview = () => {
  const services = useLoaderData();
  useTitle('My Reviews')
  return (
    <div className="container my-7 rounded-lg mx-auto">
      {services.map((serviceReview) => (
        <MyReview key={serviceReview._id} reviewData={serviceReview} />
      ))}
    </div>
  );
};

export default ServiceReview;
