import React from "react";
import "./Hero.css";
import SignInJoinForm from "./SignInJoinForm/SignInJoinForm";

export const Hero = ({ style }) => {
  return (
    <div className="d-flex bg-Light flex-row justify-content-center align-items-center heroflex">
      {/* Part1 */}
      <div className="halfwidth1">
        <h1 className="mt">
          Explore your <span style={{ color: "#0096C8" }}>hobby</span> or
          <span style={{ color: "#8064A2" }}> passion</span>
        </h1>
        <p className="lh-base mt">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="lh-base mt">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <img
          src="/Group 27.svg"
          style={{ marginTop: "50px" }}
          alt=""
          srcset=""
        />
      </div>
      {/* Part 2 */}
      <div className="halfwidth">
        <SignInJoinForm />
      </div>
    </div>
  );
};
