import { useEffect } from 'react';
import { host } from '../constants/host';
import { actionTypes } from '../context/reducer';

const useWebSocket = (dispatch) => {
    useEffect(() => {
        const socket = new WebSocket(host.SOCKET);
        socket.onopen = () => {
            console.log('Connected');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            const tanks = data.filter((element) => element.entity_type === 'PlayerSession');
            const bullets = data.filter((element) => element.entity_type === 'Bullet');
            if (bullets.length > 0) {
                dispatch({ type: actionTypes.STORE_BULLETS, payload: bullets });
            } else {
                dispatch({ type: actionTypes.CLEAR_BULLETS, payload: null });
            }

            if (tanks.length > 0) {
                dispatch({
                    type: actionTypes.STORE_TANKS,
                    payload: tanks,
                });
            } else {
                dispatch({ type: actionTypes.CLEAR_TANKS, payload: null });
            }
        };

        socket.onerror = (error) => {
            console.log('Ошибка ' + error.message);
        };
        // eslint-disable-next-line
    }, []);
};

export default useWebSocket;
