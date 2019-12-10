import React from "react";
/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import styled from "@emotion/styled";

type EmotionChildComponentProps = {
  title: string;
};

type EmotionChildComponentState = {
  toggle: boolean;
};

// CSS

const inputStyle = css`
  margin: 8px 8px 8px 20px;
  width: 150px;
`;

const buttonStyle = css(
  inputStyle,
  `
  height: 30px;
`
);

const StyledChildComponent = styled.div<EmotionChildComponentState>`
  border: 2px solid white;
  margin: 8px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${(props: EmotionChildComponentState) =>
    props.toggle ? "purple" : ""};
`;

class EmotionChildComponent extends React.Component<
  EmotionChildComponentProps,
  EmotionChildComponentState
> {
  state = {
    toggle: false
  };

  render() {
    return (
      <StyledChildComponent toggle={this.state.toggle}>
        <h2>{this.props.title}</h2>
        <button css={buttonStyle} onClick={this.onButtonOneClick}>
          Toggle Style
        </button>
        <button css={buttonStyle}>Do nothing</button>
        <input css={inputStyle} placeholder="Text goes here" />
      </StyledChildComponent>
    );
  }

  onButtonOneClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
}

const StyledEmotionChildComponent = (props: {
  title: string;
  style?: SerializedStyles;
}) => {
  return (
    <div
      css={
        props.style
          ? props.style
          : css`
              width: 500px;
            `
      }
    >
      <EmotionChildComponent title={props.title} />
    </div>
  );
};

export default StyledEmotionChildComponent;
