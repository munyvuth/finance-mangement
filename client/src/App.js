import './App.css';
import NavBar from './components/NavBar'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='font-serif'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='sign-up' element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
