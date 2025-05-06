import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, Socket } from "socket.io-client";

@Injectable()
export class SocketClient {
    public socketClient: Socket;
    constructor() {
        this.socketClient = io("http://localhost:3000");

    }
    onModuleInit() {
         this.registerConsumerEvents();
    }

    private registerConsumerEvents() {
        // this.socketClient.emit('newMessage', { msg: 'hey there!' });
        this.socketClient.on('connect', () => {
            console.log('Connected to Gateway server');
        });
        this.socketClient.on('onMessage', (payload: any) => {
          console.log('SocketClientClass!');
          console.log(payload);
        });
    }
}