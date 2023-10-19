import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Doctors from './pages/Doctors';
import Insights from './pages/Insights';
import Emergency from './pages/Emergency';
import Schedule from './pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout';
import EmergencyDetails from './components/EmergencyDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Layout/>
        <Routes>
        <Route exact path='/' Component={Dashboard}/>
        <Route path='/account' Component={Account}/>
        <Route path='/doctors' Component={Doctors}/>
        <Route path='/insights' Component={Insights}/>
        <Route path='/emergency' Component={Emergency}/>
        <Route path='/emergency/:id' Component={EmergencyDetails}/>
        <Route path='/schedule' Component={Schedule}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
