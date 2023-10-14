import { useAppDispatch } from '../../redux/hooks';

function WelcomePage() {
  const dispatch = useAppDispatch()
  const login = () => dispatch({type: 'user/LOGIN'})
  return (
    <div className="flex justify-center flex-col items-center">
      <p className="font-bold max-w-xs text-center	 text-5xl">Play Tic Tac Toe Online on the #1 Site!</p>
      <p>
        <span className="font-bold ">1,232,123</span> Games Today
      </p>
      <p>
        <span className="font-bold">12,123</span> Playing Now
      </p>
      <button onClick={login} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        <p className="text-xl">Play Online</p>
        <p className="text-xs font-light">Play with someone at your level</p>
      </button>
    </div>
  );
}

export default WelcomePage;
