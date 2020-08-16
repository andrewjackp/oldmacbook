import React from "react";
import {
  getEvents,
  updateEvent,
  createEvent,
} from "../../../services/EventService";
import { Row } from "reactstrap";
import EventForm from "../subpages/EventForm";

class EventWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        headline: "",
        description: "",
        summary: "",
        slug: "",
        statusId: "",
        dateStart: "",
        dateEnd: "",
        address: "",
        zipCode: "",
      },
    };
  }
  componentDidMount = () => {
    console.log("mounted!!", this.props.location);
    const eventId = this.props.match.params.id;
    getEvents(eventId)
      .then(this.onGetEventsSuccess)
      .catch(this.onGetEventsError);
  };

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.state.formData.id ? this.handleUpdate(values) : this.handleAdd(values);
    resetForm(this.state.formData);
  };

  handleUpdate = (values, { resetForm }) => {
    console.log(values);
    const eventData = values;
    updateEvent(eventData)
      .then(this.onUpdateEventSuccess)
      .catch(this.onUpdateEventError);
    resetForm(this.state.formData);
  };

  handleAdd = (values) => {
    console.log(values);
    createEvent(values)
      .then(this.onCreateEventSuccess)
      .catch(this.onCreateEventError);
  };
  onCreateEventSuccess = (response) => {
    console.log("created event success", response);
  };

  onCreateEventError = (response) => {
    console.log("event error", response);
  };

  onUpdateEventSuccess = (response) => {
    console.log("update event success", response);
  };

  onUpdateEventError = (response) => {
    console.log("update event error", response);
  };

  setForm = (formData) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        ...formData,
      };
    });
  };

  render() {
    return (
      <Row>
        <EventForm
          formData={this.state.formData}
          onSubmit={this.handleSubmit}
        />
      </Row>
    );
  }
}
export default EventWrapper;
