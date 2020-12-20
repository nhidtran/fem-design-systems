import { transitions } from "polished";
import React from "react";
import { animated, useTransition } from "react-spring";

export const EmojiCarousel = () => {
  const [happy, setHappy] = React.useState(true);

  // Add transition here
  const transition = useTransition(happy, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div className="emoji carousel">
      <button onClick={() => setHappy(!happy)}>Make Happy</button>
      {transition.map(({ item, props }) => {
        return item ? (
          <animated.span style={props} role="img" aria-label="Happy">
            😍
          </animated.span>
        ) : (
          <animated.span style={props} role="img" aria-label="Sad">
            😕
          </animated.span>
        );
      })}
    </div>
  );
};
