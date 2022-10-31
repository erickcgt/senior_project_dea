import './App.css';
import MyNavbar from './components/Navbar';
import MyWelcomePage from './components/Welcome';
import LearnPage from './components/Learn';
import GamePage from './components/Game';
import ProfilePage from './components/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserInfo from './components/UserInfo'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <MyNavbar />
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/welcome" element={<MyWelcomePage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/myprofile" element={<ProfilePage />} />
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userInfo" element={<UserInfo />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default App;
