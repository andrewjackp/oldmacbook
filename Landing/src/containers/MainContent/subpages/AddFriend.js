import React from "react";
import { createFriend } from "../../../services/FriendService";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      skills: "",
      primaryImage: "https://i.stack.imgur.com/JwRfI.png",
    };
  }

  componentDidMount() {
    console.log("component has mounted");
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    createFriend(this.state)
      .then(this.onCreateFriendSuccess)
      .catch(this.onCreateFriendError);
  };

  onCreateFriendSuccess = (response) => {
    console.log("create success", response);
  };

  onCreateFriendError = (response) => {
    console.log("create error", response);
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
      <React.Fragment>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputTitle1">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="exampleInputEmail1"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputBio1">Bio</label>
            <input
              type="text"
              name="bio"
              className="form-control"
              id="exampleInputLastName1"
              value={this.state.bio}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputSummary1">Summary</label>
            <input
              type="text"
              name="summary"
              className="form-control"
              id="exampleInputSummary1"
              value={this.state.summary}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputSummary1">Headline</label>
            <input
              type="text"
              name="headline"
              className="form-control"
              id="exampleInputHeadline1"
              value={this.state.headline}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputAvatar1">Slug</label>
            <input
              type="text"
              name="slug"
              className="form-control"
              id="exampleInputSlug1"
              value={this.state.slug}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputAvatar1">StatusId</label>
            <input
              type="statusId"
              name="statusId"
              className="form-control"
              id="exampleInputStatusId1"
              value={this.state.statusId}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputTitle1">Skills</label>
            <input
              type="text"
              name="skills"
              className="form-control"
              id="exampleInputSkill1"
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPrimaryImage1">PrimaryImageUrl</label>
            <input
              type="imageUrl"
              name="primaryImageUrl"
              className="form-control"
              id="exampleInputPrimaryImageUrl1"
              value={this.state.primaryImage.imageUrl}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary"
            value="create"
            onClick={this.handleSubmit}
          />
        </form>
      </React.Fragment>
    );
  }
}
export default AddFriend;
