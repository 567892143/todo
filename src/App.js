
import './App.css';
import Sodo from './todo';
function App() {
  return (
    <div className='flex flex-col justify-center items-center  bg-green-300   h-screen'>
      <h1 className=' font-extrabold text-7xl py-6'>MY TODO LIST</h1>
      <Sodo/>
    </div>
  );
}

export default App;
