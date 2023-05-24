import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background: green;
`;

// SimpleButton을 상속받고 추가적으로 font-size를 설정함
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const App = () => {
  return (
    <div>
      {/* 렌더링이 될 경우에 클래스 이름을 자동적으로 붙여줌 */}
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
    </div>
  )
}

export default App;