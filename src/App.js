import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {LOGIN, LOGOUT, PRIVATE} from "./config/routes/paths";
import Home from "./views/Home";
import Login from "./views/Login";
import Private from "./views/Private";
import AuthContextProvider from "./contexts/authContext";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import Logout from "./views/Logout";

function App() {

  return (

     <AuthContextProvider>
         <Router>
             <Routes>
                 <Route path="/" element={ <PublicRoute /> } >
                     <Route index element={ <Home/> } />
                     <Route path={ LOGIN } element={ <Login/> } />
                 </Route>
                 <Route path={PRIVATE} element={ <PrivateRoute /> }>
                     <Route index element={ <Private/> } />
                 </Route>
                 <Route path={ LOGOUT } element={ <Logout /> } />
             </Routes>
         </Router>
     </AuthContextProvider>

  );
}

export default App;
