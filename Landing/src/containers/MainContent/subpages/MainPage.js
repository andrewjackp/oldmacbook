import React from "react";
import Jobs from "../subpages/Jobs";
import Friends from "../subpages/Friends";

const MainPage = (props) => {
  return (
    <>
      <section className="bg Jobs" id="Jobs">
        <Jobs />
      </section>
      <section className="bg Friends" id="Friends">
        <Friends />
      </section>
    </>
  );
};
export default MainPage;
