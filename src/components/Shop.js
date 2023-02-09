import React from "react";
import { getItems } from "../actions/actions";

const Shop = (props) => {
  const { item, error, isFetching } = props;

  const handleClick = () => {
    getItems();
  };
  if (error) {
    return <h2>We ran into an error fetching the catalog!</h2>;
  }

  if (isFetching) {
    return <h2>Please wait, fetching the catalog!</h2>;
  }

  <div>
    <span>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        Click for Catalog!
      </button>

      <h2>{title}</h2>
      <img src={item.props.image} />
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <p>Category: {item.category}</p>
      <p>Rating: {item.rating}</p>
    </span>
    {/* {items.map((item, idx) => {
        return <Shop key={idx} item={item} />;
      })} */}
  </div>;
};

export default Shop;
