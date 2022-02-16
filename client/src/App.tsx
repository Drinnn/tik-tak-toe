import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  return (
    <AppContainer>
      <h1>Welcome to Tik-Tak-Toe</h1>
    </AppContainer>
  );
}

export default App;
