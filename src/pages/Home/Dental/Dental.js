import React from "react";
import { Link } from "react-router-dom";
import teeth from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../button/PrimaryButton";

const Dental = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content grid md:grid-cols-2 grid-cols-1">
        <img
          src={teeth}
          className="max-w-xs rounded-lg shadow-2xl mx-auto"
          alt="teeth"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-justify">
            The Dental Care is a modern dental clinic, specialized in advanced
            diagnostics and treatment of dental and oral disorders. We offer
            comprehensive services from all fields of dentistry. In addition to
            high-end dental equipment, all services are provided in a
            comfortable, luxury environment. Our mission is to provide
            world-class dental care for our patients at an affordable cost with
            finest, atraumatic treatment possible which will eliminate their
            problems and satisfy their needs.
          </p>
          <PrimaryButton><Link to='/reviews'>Reviews</Link></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Dental;
