import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background: green;
`;

// SimpleButton을 상속받고 추가적으로 font-size를 설정함
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 일반적인 방법
// 스타일 컴포넌트를 사용하지 않으면 스타일이 적용 안됨
const ReactButton = (props) => {
  console.log("props", props);
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// primary라는 props를 주는 경우
const PrimaryButton = styled.button`
  color: ${props => props.primary ? "white" : "black"};
  background-color: ${props => props.primary ? "blue" : "gray"};
`;

const App = () => {
  return (
    <div>
      {/* 렌더링이 될 경우에 클래스 이름을 자동적으로 붙여줌 */}
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>ReactLarge</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  )
}

export default App;