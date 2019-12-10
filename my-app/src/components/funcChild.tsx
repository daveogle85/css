import React from "react";
import classnames from "classnames";

type FuncChildComponentProps = {
  title: string;
};

type FuncChildComponentState = {
  toggle: boolean;
};

class FuncChildComponent extends React.Component<
  FuncChildComponentProps,
  FuncChildComponentState
> {
  state = {
    toggle: false
  };

  render() {
    return (
      <div
        className={classnames("border-white flex-column m2 p2 mlr5", {
          "background-color-purple": this.state.toggle
        })}
      >
        <h2>{this.props.title}</h2>
        <button className="m2 ml3" onClick={this.onButtonOneClick}>
          Toggle Style
        </button>
        <button className="m2 ml3">Do nothing</button>
        <input className="m2 ml3" placeholder="Text goes here" />
      </div>
    );
  }

  onButtonOneClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };
}

export default FuncChildComponent;
