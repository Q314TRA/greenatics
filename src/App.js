import logo from './logo.svg';
import './App.css';

import background from './assests/img/gettyimages-1184156438-2048x2048.jpg'
import isoTipo from './assests/img/logos greenatics-iso.png'
import underConstruction from './assests/img/underConstruction.png'

function App() {
  return (
    <div className="main" style={{backgroundImage:`url(${background})`}}>
      <img className='logo-whitemark' src={isoTipo}></img>
      <div className='content-text'>
        <img  src={underConstruction}></img>
      </div>
    </div>
  );
}

export default App;
