import './App.css';
import NavBar from './components/NavBar'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { AuthProvider } from './components/AuthProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='font-serif'>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div >
  );
}

export default App;
