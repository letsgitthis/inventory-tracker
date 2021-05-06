import React from "react";
import { Link, Route } from "react-router-dom";
import Food from "../Food/Food";
import "./style.css";

function Pantry(props) {
  return (
    <div>
      <h1>Pantry Page</h1>
      <div className="card">
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
        Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
        pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
        tincidunt bibendum mi. 
      </p>
      </div>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/Pantry" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/food`} component={Food} />
    </div>
  );
}

export default Pantry;
