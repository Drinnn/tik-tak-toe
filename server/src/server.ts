import 'reflect-metadata';
import * as http from 'http';

import app from './app';
import socketServer from './socket';

app.set('port', 3333);

const server = http.createServer(app);
const io = socketServer(server);
