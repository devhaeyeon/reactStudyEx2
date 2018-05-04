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
      number: 0
    };
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number} </div>
        <div>
          이 때 this는 undefined로 나타남. 함수가 버튼의 클릭 이벤트로 전달되는
          과정에서 this와의 연결이 끊어지게됨.
        </div>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}
export default Counter;
