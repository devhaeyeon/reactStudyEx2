import React, { Component } from "react";

/*

props만 받아와서 보여주기만 하는 컴포넌트의 경우에 사용 > 함수형태
함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은
state와 LifeCycle이 빠져있다.
컴포넌트 초기 마운트가 아주 미세하게 빠르고,
메모리 자원을 덜 사용함.
(컴포넌트르 무수히 많인 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없음)

 */

const MyCompany = ({ name }) => {
  return <div>회사 이름은 {name} 입니다.</div>;
};

MyCompany.defaultProps = {
  name: "DK Techin"
};

export default MyCompany;
