import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

const Input = styled.input`
  width: 20em;
  height: 30px;
  font-size: 17px;
  outline: none;
  border: 1px solid #8e44ad;
  border-radius: 3px;
  padding: 0 10px;
`;

const JoinButton = styled.button`
  outline: none;
  background-color: #8e44ad;
  color: #fff;
  font-size: 17px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 4px 18px;
  transition: all 230ms ease-in-out;
  margin-top: 1em;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid #8e44ad;
    color: #8e44ad;
  }
`;

interface IJoinRoomProps {}

function JoinRoom(props: IJoinRoomProps) {
  const [roomName, setRoomName] = useState('');

  return (
    <form>
      <Container>
        <h4>Enter Room ID to Join the Game</h4>
        <Input
          placeholder="Room ID"
          value={roomName}
          onChange={(e: React.ChangeEvent<any>) => {
            setRoomName(e.target.value);
          }}
        />
        <JoinButton>Join!</JoinButton>
      </Container>
    </form>
  );
}

export default JoinRoom;
