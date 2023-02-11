import React, { useEffect } from "react";
import { getItems } from "../actions/actions";
import { connect } from "react-redux";

import "./Shop.css";

const Shop = (props) => {
  const { item, isFetching, error, getItems } = props;

  if (error) {
    return <h2>We ran into an error fetching the catalog!</h2>;
  }

  if (isFetching) {
    return <h2>Please wait, fetching the catalog!</h2>;
  }

  return (
    <div className="main-container">
      <h1>The Concept Store</h1>
      <button className="btn btn-dark" onClick={getItems}>
        Click for Catalog!
      </button>
      <div clasName="card-cotainer">
        {item?.map((items, idx) => {
          return (
            <div className="display-container" key={idx}>
              <img
                src={items.image}
                alt={items.image}
                width={100}
                height={100}
              />
              <div className="details-container">
                <h4>{items.title}</h4>
                <p>Price: ${items.price}</p>
                <p>Description: {items.description}</p>
                <p>Category: {items.category}</p>

                <p>
                  This product is rated: {items.rating.rate}/5 stars out of{" "}
                  {items.rating.count} reviews
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
    isFetching: state.isFetching,
    error: state.state,
  };
};

export default connect(mapStateToProps, { getItems })(Shop);
