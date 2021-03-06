import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from 'socket-controllers';
import { Server, Socket } from 'socket.io';

@SocketController()
export class RoomController {
  @OnMessage('join_room')
  public async joinGame(
    @SocketIO() io: Server,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ) {
    const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (roomId) => roomId !== socket.id
    );

    if (socketRooms.length > 0) {
      socket.emit('join_room_error', {
        error: 'User already connected to one room.',
      });
    }

    if (connectedSockets && connectedSockets.size === 2) {
      socket.emit('join_room_error', {
        error: 'Room is full.',
      });
    }

    await socket.join(message.roomId);
    
    socket.emit('join_room_successs');
  }
}
