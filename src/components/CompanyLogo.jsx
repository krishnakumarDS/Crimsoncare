import React from "react";
import { companyLogos } from "../constants";

const CompanyLogo = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping Peoples to write and Generate Powerfull Code
      </h5>
      <ul className="tagline mb-6 text-center text-n-1/50">
        <li>Developed By Krishna</li>
      </ul>
    </div>
  );
};

export default CompanyLogo;
