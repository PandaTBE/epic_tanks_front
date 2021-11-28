import { useEffect } from 'react';
import { actionTypes } from '../context/reducer';

const useWebSocket = (dispatch) => {
    useEffect(() => {
        const socket = new WebSocket('ws://34.71.168.206:9481');
        socket.onopen = () => {
            console.log('Connected');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const tanks = data.filter((element) => element.entity_type === 'PlayerSession');
            const bullets = data.filter((element) => element.entity_type === 'bullet');
            console.log(tanks, bullets);

            dispatch({
                type: actionTypes.STORE_TANKS,
                payload: tanks,
            });
        };

        socket.onerror = (error) => {
            console.log('Ошибка ' + error.message);
        };
        // eslint-disable-next-line
    }, []);
};

export default useWebSocket;
