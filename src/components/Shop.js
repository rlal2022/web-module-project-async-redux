import React from "react";
import { getItems } from "../actions/actions";
import { connect } from "react-redux";

const Shop = (props) => {
    const {items} = props;
  

  const handleClick = () => {
    getItems();
  };
  if (props.error) {
    return <h2>We ran into an error fetching the catalog!</h2>;
  }

  if (props.isFetching) {
    return <h2>Please wait, fetching the catalog!</h2>;
  }

  return (  <div>
  
    <span>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        Click for Catalog!
      </button>

      <h2>{props.title}</h2>
      <img src={props.image} />
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
      <p>Category: {props.category}</p>
      <p>Rating: {props.rating}</p>
    </span>
    {/* {props.items.map((item, idx) => {
      return <Shop key={idx} item={item} />;
    })} */}

  </div>)
    

};


const mapStateToProps = (state) => {
  return {
  
  item: state,
  error: state,
  }
}

export default connect(mapStateToProps, {})(Shop)
