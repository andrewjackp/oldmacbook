import React from "react";
// import { Row } from "reactstrap";
import { getJobs, searchJobs, deleteJob } from "../../../services/JobService";
import JobCarousel from "../subpages/JobCarousel";
import "rc-pagination/assets/index.css";

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      visible: 4,
      error: false,
      mappedJobs: [],
      searchInput: "",
      selectedJobs: null,
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      pageIndex: 0,
      pageSize: 10,
    };
  }

  loadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.onGetJobs();
  }

  onGetJobs = () => {
    let pageIndex = this.state.currentPage - 1;
    getJobs(pageIndex, this.state.pageSize)
      .then(this.onGetJobsSuccess)
      .catch(this.onGetJobsError);
  };

  onGetJobsSuccess = (response) => {
    console.log("success getting jobs", response);
    let jobs = response.item.pagedItems;
    // let mappedJobs = jobs.map(this.mapJob);
    this.setState((prevState) => {
      return {
        ...prevState,
        jobs,
        // mappedJobs,
        totalCount: response.item.totalCount,
        totalPages: response.item.totalPages,
      };
    });
  };

  onEditJobRequest = (job) => {
    this.props.history.push(`/JobFormWrapper/${job.id}`, job);
  };

  mapJob = (job) => (
    <JobCarousel
      job={job}
      key={job.id}
      onEditJobRequest={this.onEditJobRequest}
      onDeleteJobRequest={this.onDeleteJobRequest}
    />
  );

  onDeleteJobRequest = (deleteId) => {
    deleteJob(deleteId)
      .then(this.onDeleteJobSuccess(deleteId))
      .catch(this.onDeleteJobError);
  };

  onDeleteJobSuccess = (id) => {
    console.log("Success deleting job", id);
    const filteredJobs = this.state.jobs.filter((aJob) => aJob.id !== id);
    this.setState({ jobs: filteredJobs });
  };

  onDeleteJobError = (id) => {
    console.log("no delete job", id);
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState(
      {
        currentPage: page,
      },
      () => this.onGetJobs()
    );
  };

  handleSearchClick = (e) => {
    e.preventDefault();
    console.log("search has initiated", { syntheticEvent: e });
    this.handleGetSearch();
  };

  handleSearch = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  handleGetSearch = () => {
    console.log("search handler is searching", this.state.searchInput);
    let searchTerm = this.state.searchInput;
    if (searchTerm === this.state.searchInput) {
      searchJobs(searchTerm)
        .then(this.onGetJobsSuccess)
        .catch(this.onGetJobsError);
    } else {
      let pageIndex = this.state.currentPage - 1;
      getJobs(pageIndex, this.state.pageSize)
        .then(this.onGetJobsSuccess)
        .catch(this.onGetJobsError);
    }
  };

  render() {
    return (
      <section className="section bg-light" id="jobs">
        <div className="container">
          <form className="form-inline my-2 my-sm-0">
            <input
              className="form-control mr-sm-2"
              name="searchInput"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchInput}
              onChange={this.handleSearch}
            />
            <button
              className="btn btn-custom my-2 my-sm-0"
              type="submit"
              onClick={this.handleSearchClick}
            >
              Search
            </button>
          </form>

          {/* <div className="card-deck">
            {this.state.mappedJobs.slice(0, this.state.visible)}
          </div> */}

          {this.state.jobs.length > 0 && (
            <JobCarousel
              onEditJobRequest={this.onEditJobRequest}
              jobs={this.state.jobs.slice(0, this.state.visible)}
            />
          )}

          {this.state.visible < this.state.jobs.length && (
            <button
              onClick={this.loadMore}
              type="button"
              className="btn btn-custom float-right"
            >
              Load more
            </button>
          )}
        </div>
      </section>
    );
  }
}
export default Jobs;
