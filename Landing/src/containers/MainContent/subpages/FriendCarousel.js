import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function FriendCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex, e);
    setIndex(selectedIndex);
  };

  return (
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
      {props.friends &&
        props.friends.map((item) => {
          return (
            <Carousel.Item>
              <div className="text-center">
                <div className="friend-img-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={item.primaryImage.imageUrl}
                    alt="First slide"
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className="mt-4">
                  <h4
                    className="title-heading"
                    onClick={() => props.onEditFriendRequest(item)}
                  >
                    {item.title}
                  </h4>
                  <p className="text-muted friend-txt mt-4">{item.summary}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default FriendCarousel;
