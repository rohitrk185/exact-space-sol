import './App.css';

import Header from './components/Header';
import Chat from './components/Chat.jsx';


function App() {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  return (
  <>
    <h1 id='heading'>Welcome</h1>
    <div className='chat-container flex'>
      <Header />
      <hr />
      <Chat userList={user_list} />
    </div>
  </>
  );
}

export default App;
