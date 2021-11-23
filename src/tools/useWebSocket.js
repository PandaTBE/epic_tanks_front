import { useEffect } from 'react';

const useWebSocket = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://34.71.168.206:5432');
        socket.onopen = () => {
            console.log('Connected');
        };

        socket.onmessage = (event) => {
            console.log('Получены данные ' + event.data);
        };

        socket.onerror = (error) => {
            console.log('Ошибка ' + error.message);
        };
    });
};

export default useWebSocket;
