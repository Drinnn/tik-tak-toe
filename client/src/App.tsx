import { useEffect } from 'react';
import styled from 'styled-components';
import JoinRoom from './components/joinRoom';

import socketService from './services/socket';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const WelcomeText = styled.h1`
  margin: 0;
  color: #8e44ad;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const connectToSocket = async () => {
    const socket = await socketService
      .connect('http://localhost:3333')
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    connectToSocket();
  }, []);

  return (
    <AppContainer>
      <WelcomeText>Welcome to Tik-Tak-Toe</WelcomeText>
      <MainContainer>
        <JoinRoom />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
