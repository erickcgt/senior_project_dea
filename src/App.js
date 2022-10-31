import './App.css';
import MyNavbar from './components/Navbar';
import MyWelcomePage from './components/Welcome';
import LearnPage from './components/Learn';
import GamePage from './components/Game';
import ProfilePage from './components/Profile';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <MyNavbar />
      <div className="App">
        <Routes>
          <Route path="/welcome" element={<MyWelcomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/myprofile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;
