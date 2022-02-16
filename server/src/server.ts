import 'reflect-metadata';
import * as http from 'http';

import app from './app';
import socketServer from './socket';

const PORT = 3333;

app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

const io = socketServer(server);
