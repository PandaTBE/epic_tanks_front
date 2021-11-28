import { useContext, useReducer } from 'react';
import { GlobalStyle } from './App.styles';
import TanksMap from './components/TanksMap';
import Context from './context/context';
import reducer from './context/reducer';
import useWebSocket from './tools/useWebSocket';

const App = () => {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState);
    useWebSocket(dispatch);
    return (
        <Context.Provider value={{ state, dispatch }}>
            <GlobalStyle />
            <TanksMap />
        </Context.Provider>
    );
};
export default App;
