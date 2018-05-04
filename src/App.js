import React, { Component, Fragment } from "react";
import MyInfo from "./MyInfo";
import MyJob from "./MyJob";
import MyCompany from "./MyCompany";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>props의 값은 name="리액트"이다</div>
        <MyInfo name="react" />
        <MyJob />
        <MyCompany />
        <Counter/>
      </Fragment>
    );
  }
}

export default App;
