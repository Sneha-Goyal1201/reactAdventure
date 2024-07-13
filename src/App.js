
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/home';
import {Contact} from './components/contact';
import {About} from './components/about';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
