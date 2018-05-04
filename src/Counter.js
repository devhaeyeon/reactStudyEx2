import React, { Component } from "react";

class Counter extends Component {
  /*
controuctor에서 super를 호출한 이유.
컴포넌트를 만들게 되면서 Component를 상혹했으며,

우리가 이렇게 controuctor를 작성하게 되면 기존의 클래스 생성자를 덮어쓰게 됨.
>> 리액트 컴포넌트가 지니고 있던 생성자 super을 통하여 미리 실행.
그 다음 state 설정을 해주는 것임.
 */

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      foo: "bar"
    };

    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease2 = this.handleDecrease2.bind(this);
    this.handleIncrease2 = this.handleIncrease2.bind(this);
  }

  /* state에 있는 값을 바꾸기 위해서는 this.setState를 무조건 거쳐야 함.
  리액트에서는 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계가 되어 있음.
  객체로 전달 되는 값만 업데이트 해줌.
  
   */

  handleIncrease2 = () => {
    console.log(this);
    /*비구조화 할당 {number} = state = this.state  */
    this.setState(({ number }) => ({
      number: number + 1
    }));
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };

  handleDecrease2 = () => {
    /* 조건문 넣어서 -이면 감소 되지 않게 하기  */
    if (this.state.number > 0) {
      this.setState(state => ({
        number: state.number - 1
      }));
    }
  };

  handleChangeData = () => {
    this.setState({
      foo: {
        ...this.state.foo,
        foobar: 2
      }
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number} </div>
        <div>foo데이터 : {this.state.foo.foobar}</div>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleIncrease}>+</button>
        <div>
          이름을 설정할 때 카멜케이스로 설정해주어야함. onclick->onClick
        </div>
        <button onClick={this.handleChangeData}>data</button>
        <button onClick={this.handleDecrease2}>minus</button>
        <button onClick={this.handleIncrease2}>plus</button>
        <div>
          이벤트에 전달해주는 값은 함수여야함. this.handleIncrease()이라면
          렌더링할 때마다 해당 함수가 호출이됨. 렌더링 > 함수호출 > setState >
          렌더링 > 함수호출 > 무한반복이 됨.
        </div>
      </div>
    );
  }
}
export default Counter;
