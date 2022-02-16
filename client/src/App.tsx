import { useEffect } from 'react';
import { io } from 'socket.io-client';
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
  const connect = () => {
    const socket = io('http://localhost:3333');
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <AppContainer>
      <h1>Welcome to Tik-Tak-Toe</h1>
    </AppContainer>
  );
}

export default App;
