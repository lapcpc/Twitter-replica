import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div >
      <main className="grid grid-cols-9 w-5/6 mx-auto">
        {/*Sidebar*/}
        <Sidebar />
        

        {/* Feed */}
        <Feed />
        
        {/* Widgets */}
        <Widgets />

      </main>
      
    </div>
  );
}

export default App;
