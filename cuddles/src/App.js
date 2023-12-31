import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Doctors from "./pages/Doctors";
import Insights from "./pages/Insights";
import Emergency from "./pages/Emergency";
import Schedule from "./pages/Schedule";
import UpdateDoctor from "./pages/UpdateDoctor";
import { LoaderProvider, useLoader } from "./context/LoaderContext";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import EmergencyDetails from "./components/EmergencyDetails";
import AddDoctor from "./pages/AddDoctor";
import InsightDetails from "./pages/InsightDetails"

function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <div className="App">
          <Layout />
          <Routes>
            <Route exact path="/" Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/account" Component={Account} />
            <Route path="/doctors" Component={Doctors} />
            <Route path="/insights" Component={Insights} />
            <Route path="/emergency" Component={Emergency} />
            <Route path="/emergency/:id" Component={EmergencyDetails} />
            <Route path="/schedule" Component={Schedule} />
            <Route path="/addDoctor" Component={AddDoctor} />
            <Route path="/updateDoctor/:id" Component={UpdateDoctor} />
            <Route path="/insightDetails/:id" Component={InsightDetails} />
          </Routes>
          <ToastContainer />
        </div>
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
