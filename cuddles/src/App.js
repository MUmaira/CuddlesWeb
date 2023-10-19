import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Doctors from './pages/Doctors';
import Insights from './pages/Insights';
import Emergency from './pages/Emergency';
import Schedule from './pages/Schedule';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <SideBar/>
        <Routes>
        <Route exact path='/' Component={Dashboard}/>
        <Route path='/account' Component={Account}/>
        <Route path='/doctors' Component={Doctors}/>
        <Route path='/insights' Component={Insights}/>
        <Route path='/emergency' Component={Emergency}/>
        <Route path='/schedule' Component={Schedule}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
