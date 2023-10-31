import { Link, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import JobList from './Joblist';
import Detail from './Detail';



const App = () => {

  return (
    <>
      <div>
        <nav className="navbar">
        <ul>
          <Link to="/">Home</Link>|
          <Link to="/vacancy">Vacancy</Link>|
        </ul>
	        </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='vacancy' element={<JobList/>}/>
                <Route path='vacancy/:id' element={<Detail/>}/>
            </Routes>
      </div>

    </>
   
  );
}

export default App;

