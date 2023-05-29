import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Landing/>}/>
          <Route path='log-in' element={<Login/>}/>
          <Route path='sign-up' element={<SignUp/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
