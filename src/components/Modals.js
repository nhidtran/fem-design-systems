import React from "react";
import { typeScale } from "../utils";
import styled from "styled-components";
import { Illustrations } from "../assets";
import { CloseIcon } from "../assets/icons/close-icon";
import { PrimaryButton } from "./Buttons";
import { animated, useSpring, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  img {
    width: 10vw;
  }
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const FadeIn = () => {
  const [showText, setShowText] = React.useState(true);
  const animation = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? `translateY(0)` : `translateY(-30%)`
  });
  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Toggle Animation</button>
      <animated.p style={animation}>Animate me on click</animated.p>
    </div>
  );
};

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `transalteY(0)` : `translateY(-200%)`,
    config: config.molasses
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={Illustrations.SignUp}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <SignUpHeader>SignUp</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton>Sign up!</PrimaryButton>
        <FadeIn />
        <CloseModalButton aria-label="Close modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
