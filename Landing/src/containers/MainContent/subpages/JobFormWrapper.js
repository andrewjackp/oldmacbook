import React from "react";
import { createJob, updateJob, getJobById } from "../../../services/JobService";
import { Row } from "reactstrap";
import JobForm from "../subpages/JobForm";

class JobFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        description: "",
        summary: "",
        pay: "",
        slug: "",
        statusId: "Active",
        techCommpanyId: 0,
        skills: [],
      },
    };
  }

  componentDidMount() {
    console.log("componentDidMount", this.props.location);
    const { id } = this.props.match.params;
    if (id) {
      const { state } = this.props.location;
      if (state) {
        this.setForm(state);
      } else {
        const jobId = this.props.match.params.id;
        getJobById(jobId)
          .then(this.onGetJobByIdSuccess)
          .catch(this.onGetJobByIdError);
      }
    }
  }

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    formValues[target.name] = target.value;
    this.setState({ formValues });
    // this.handleValidation(target);
  };

  handleSubmit = (values, { resetForm }) => {
    values.skills = values.skills.split(", ");
    console.log(values);

    this.state.formData.id ? this.handleUpdate(values) : this.handleAdd(values);
    resetForm(this.state.formData);
  };

  handleUpdate = (values, { resetForm }) => {
    console.log(values);
    const jobData = values;
    updateJob(jobData)
      .then(this.onUpdateJobSuccess)
      .catch(this.onUpdateJobError);

    resetForm(this.state.formData);
  };

  handleAdd = (values) => {
    console.log(values);
    createJob(values)
      .then(this.onCreateJobSuccess)
      .catch(this.onCreateJobError);
  };

  onCreateJobSuccess = (response) => {
    console.log("created job success", response);
  };

  onCreateJobError = (response) => {
    console.log("job error", response);
  };

  onUpdateJobSuccess = (response) => {
    console.log("update success", response);
  };

  onUpdateJobError = (response) => {
    console.log("update error", response);
  };

  setForm = (formData) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        ...formData,
        skills:
          formData.skills.length > 0
            ? formData.skills.map((skill) => skill.name).join(", ")
            : "Andy",
      };
    });
  };

  render() {
    return (
      <Row>
        <JobForm formData={this.state.formData} onSubmit={this.handleSubmit} />
      </Row>
    );
  }
}
export default JobFormWrapper;
