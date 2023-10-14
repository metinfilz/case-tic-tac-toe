import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux';
import routes from './routes';
import { useAppSelector } from '../redux/hooks';

function Container() {
  const { logged } = useAppSelector((state) => state.user);
  return <>{useRoutes(routes(logged))}</>;
}

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Container />
      </Router>
    </ReduxProvider>
  );
}

export default App;
