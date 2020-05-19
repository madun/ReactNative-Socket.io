import io from 'socket.io-client';
const socket = io('http://192.168.0.12:3000');
// const socket = io('http://192.168.139.10:3000');
socket.connect();
export default socket;
