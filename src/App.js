import './App.css';

import Header from './components/Header';
import Chat from './components/Chat.jsx';

function App() {

  return (
    <>
      {/* <h1 id='heading'>Welcome</h1> */}
      <div className='chat-container flex'>
        <Header />
        <hr />
        <Chat />
      </div>  
    </>
  );
}

export default App;
