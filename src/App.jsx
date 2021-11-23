import { GlobalStyle } from './App.styles';
import TanksMap from './components/TanksMap';
import useWebSocket from './tools/useWebSocket';

const App = () => {
    useWebSocket();
    return (
        <>
            <GlobalStyle />
            <TanksMap />
        </>
    );
};
export default App;
