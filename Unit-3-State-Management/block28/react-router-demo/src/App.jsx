import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {


  return (
    <>
      <Nav />
      <h1>My App</h1>
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/users' element={<h2>Users</h2>} />
        <Route path='/posts' element={<h2>Posts</h2>} />
      </Routes>
    </>
  );
}

export default App;
