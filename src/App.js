import FriendActivity from './components/FriendActivity'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='App'>
         <Sidebar className='sidebar' />
         <Home className='home' />
         <FriendActivity className='friendSidebar' />
      </div>
  );
}

export default App;