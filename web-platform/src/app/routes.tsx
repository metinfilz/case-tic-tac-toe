import { HomePage, PlayPage, WelcomePage } from '../pages';
import { Navigate } from 'react-router-dom';

const routes = (logged: boolean) => [
  { path: '/', element: logged ? <Navigate to="/home" /> : <WelcomePage /> },
  { path: '/home', element: logged ? <HomePage /> : <Navigate to="/" /> },
  { path: '/play', element: logged ? <PlayPage /> : <Navigate to="/" /> },
];
export default routes;
