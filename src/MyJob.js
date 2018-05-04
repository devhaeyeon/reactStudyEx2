import React, { Component } from "react";

class MyJob extends Component {
  render() {
    return (
      <div>
        제 직업안 <b>{this.props.job}</b>입니다.<br />
        함수형 컴포넌트 작업 시 이 파일에 있는 방식으로 한다. <br />
        props가 없을 때 혹은 실수로 빼먹게 될 때 주는 기본 값으로 보면 된다.
      </div>
    );
  }
}

MyJob.defaultProps = {
  job: "Front-End Developer"
};

export default MyJob;
