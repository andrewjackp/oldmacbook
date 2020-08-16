import React from "react";
// import { Row } from "reactstrap";
import {
  getFriends,
  deleteFriendById,
  searchByQuery,
} from "../../../services/FriendService";
import FriendCarousel from "../subpages/FriendCarousel";
import "rc-pagination/assets/index.css";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      friends: [],
      mappedFriends: [],
      searchedFriends: "",
      searchInput: "",
      selectedFriend: null,
      totalCount: 0,
      totalPages: 0,
      currentPage: 1,
      pageIndex: 0,
      pageSize: 12,
      visible: 4,
      error: false,
    };
  }

  loadMore = () => {
    this.setState((prev) => {
      return {
        visible: prev.visible + 4,
      };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.onGetFriends();
  }

  onGetFriends = () => {
    let pageIndex = this.state.currentPage - 1;
    getFriends(pageIndex, this.state.pageSize)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  onGetFriendsSuccess = (response) => {
    console.log("success", response);
    let friends = response.item.pagedItems;
    // let mappedFriends = friends.map(this.mapFriend);
    this.setState((prevState) => {
      return {
        ...prevState,
        friends,

        totalCount: response.item.totalCount,
        totalPages: response.item.totalPages,
      };
    });
  };

  onGetFriendsError = (response) => {
    console.log("error", response);
  };

  onEditFriendRequest = (friend) => {
    this.props.history.push(`/FriendForm/${friend.id}`, friend);
  };

  mapFriend = (friend) => (
    <FriendCarousel
      friend={friend}
      key={friend.id}
      onDeleteFriendByIdRequest={this.onDeleteFriendByIdRequest}
      onEditFriendRequest={this.onEditFriendRequest}
    />
  );

  onDeleteFriendByIdRequest = (deleteId) => {
    deleteFriendById(deleteId)
      .then(this.onDeleteFriendByIdSuccess(deleteId))
      .catch(this.onDeleteFriendByIdError);
  };

  onDeleteFriendByIdSuccess = (id) => {
    console.log("Success deleting", id);
    const filteredFriends = this.state.friends.filter(
      (aFriend) => aFriend.id !== id
    );
    this.setState({ friends: filteredFriends });
  };

  onDeleteFriendByIdError = (id) => {
    console.log("no delete", id);
  };

  addButtonPressed = () => {
    this.props.history.push("/AddFriend/add");
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState(
      {
        currentPage: page,
      },
      () => this.onGetFriends()
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
    let searchQuery = this.state.searchInput;
    searchByQuery(searchQuery)
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="friends">
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

            {this.state.friends.length > 0 && (
              <FriendCarousel
                onEditFriendRequest={this.onEditFriendRequest}
                friends={this.state.friends.slice(0, this.state.visible)}
              />
            )}

            {this.state.visible < this.state.friends.length && (
              <button
                onClick={this.loadMore}
                type="button"
                className="btn btn-custom float-right"
              >
                Load More
              </button>
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Friends;
