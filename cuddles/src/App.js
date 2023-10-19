import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Doctors from "./pages/Doctors";
import Insights from "./pages/Insights";
import Emergency from "./pages/Emergency";
import Schedule from "./pages/Schedule";
import { LoaderProvider, useLoader } from "./context/LoaderContext";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <div className="App">
          <Header />
          <SideBar />
          <Routes>
            <Route exact path="/" Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/account" Component={Account} />
            <Route path="/doctors" Component={Doctors} />
            <Route path="/insights" Component={Insights} />
            <Route path="/emergency" Component={Emergency} />
            <Route path="/schedule" Component={Schedule} />
          </Routes>
          <ToastContainer />
        </div>
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
