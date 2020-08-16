import React from "react";
import { getEvents } from "../../../services/EventService";
// import EventWrapper from "../subpages/EventWrapper";
// import EventForm from "../subpages/EventForm";
import EventCard from "../subpages/EventCard";
import { Row } from "reactstrap";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      currentPage: 1,
      pageIndex: 0,
      pageSize: 10,
      dateStart: "2020-07-01",
      dateEnd: "2020-07-01",
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");
    this.onGetEvents(this.state);
  };

  onGetEvents = () => {
    getEvents(
      this.state.pageIndex,
      this.state.pageSize,
      this.state.dateStart,
      this.state.dateEnd
    )
      .then(this.onGetEventsSuccess)
      .catch(this.onGetEventsError);
  };

  onGetEventsSuccess = (response) => {
    console.log("success events", response);
    let events = response.item.pagedItems;
    let mappedEvents = events.map(this.mapEvent);
    this.setState((prevState) => {
      return {
        ...prevState,
        events,
        mappedEvents,
      };
    });
  };

  onGetEventsError = () => {
    console.log("error");
  };

  mapEvent = (event) => <EventCard event={event} key={event.id} />;

  render() {
    return (
      // <section className="section bg-white" id="events">
      //   <div className="container">{this.state.mappedEvents}</div>
      // </section>
      <Row>
        <div className="container">{this.state.mappedEvents}</div>
        {/* <EventForm
          formData={this.state.formData}
          onSubmit={this.handleSubmit}
        /> */}
      </Row>
    );
  }
}
export default Events;
