import React, { useEffect } from "react";
import "./App.css";
import Shop from "./components/item";
import { getItems } from "./actions/actions";
import { connect } from "react-redux";

const App = (props) => {
  const { isFetching } = props;
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <center>
        <h1>The Concept Store</h1>

        <div className="shop"></div>

        <Shop />
      </center>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state,
  };
};
export default connect(mapStateToProps, { getItems })(App);
