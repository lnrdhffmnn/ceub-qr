import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/404';
import Config from './components/config/Config';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div id='app'>
      <Header />
      <div id='routes'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/config' element={<Config />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;