import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Data Science Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:35,
      }}
    />
  );
}

export default Type;
