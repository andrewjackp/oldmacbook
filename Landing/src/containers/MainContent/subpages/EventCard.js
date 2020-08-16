import React from "react";
// import { CardBody, Card, Row } from "reactstrap";

const EventCard = (props) => {
  return (
    <div
      className="m-3 card"
      key={props.event.id}
      style={{ paddingTop: "10px" }}
    >
      <img
        className="card-img-top"
        src="https://upload.wikimedia.org/wikipedia/en/e/eb/Windows_95_at_first_run.png"
        alt=""
      />
      <div className="card-body">
        <div>
          <div>
            <h4 className="card-text">{props.event.name} </h4>
            <ul></ul>
            <h5 className="card-text">{props.event.description}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
