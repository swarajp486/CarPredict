
import './App.css';
import {routes} from './routes'
import Navbar from './Components/Navbar';
import { useRoutes } from 'react-router-dom';


function App() {
  const element= useRoutes(routes)

  
  
  return (
    <div >
     <Navbar/>
     {element}
    </div>
  );
}

export default App;
