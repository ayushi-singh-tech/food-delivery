import React from "react";
import "./FilterComponent.scss";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const FilterComponent = () => {
  return (
    <>
      <div className="filter_components">
        <div className="filter_section">
          <div className="location_container">
            <div className="location_title">your location</div>
            <div className="location">Lorem, ipsum dolor.</div>
          </div>
          <div className="search_container">
            <div className="search_icon"><IoSearch className="icon" /> </div>
            
            <input
            
            
              type="text"
              className="search_input"
              placeholder="search restaurant"
            />
            <div className="cross_icon"> <RxCross1 className="icon"/> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
