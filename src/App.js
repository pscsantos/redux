import { Provider } from 'react-redux'
import SideBar from './components/Sidebar'
import Video from './components/Video'

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>        
        <Video />
        <SideBar />
      </Provider>      
    </div>
  );
}

export default App;
