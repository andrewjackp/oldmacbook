import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function JobCarousel(props) {
  const [index, setIndex] = useState(0);
  console.log(props);

  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex, e);
    setIndex(selectedIndex);
  };

  // const deleteButtonPressed = () => {
  //   props.onDeleteJobRequest(props.job.id);
  // };

  const getImage = (job) => {
    if (job.techCompany && job.techCompany.images.length > 0) {
      return job.techCompany.images[0].imageUrl;
    } else {
      return "";
    }
  };

  const handleEdit = (job) => {
    props.onEditJobRequest(job);
  };

  return (
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
      {props.jobs &&
        props.jobs.map((job) => {
          return (
            <Carousel.Item>
              <div className="text-center">
                <div className="job-img-center">
                  <img
                    className="img-thumbnail"
                    src={getImage(job)}
                    alt="First slide"
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className="mt-4">
                  <h5 className="title-heading" onClick={() => handleEdit(job)}>
                    {job.title}
                  </h5>
                  <p className="text-muted friend-txt mt-4">{job.summary}</p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default JobCarousel;
