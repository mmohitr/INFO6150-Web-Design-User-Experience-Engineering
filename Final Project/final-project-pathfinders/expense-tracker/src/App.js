import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { Button } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// renders app component containing other application components
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// protected routes 
export function ProtectedRoute(props){

  if(localStorage.getItem('user'))
  {
    return props.children
  }else{
   return <Navigate to='/login'/>
  }

}



export default App;
