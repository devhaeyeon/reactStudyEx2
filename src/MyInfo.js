import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    age: "3..."
  };

  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다. 나이는{" "}
        <b>{this.props.age}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
