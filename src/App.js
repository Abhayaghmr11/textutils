
import './App.css'; 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alerts from './Components/Alerts';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from "react-router-dom";

function App() {
  const [modeBlack, setModeBlack] = useState('light');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500);

}

  const toggleMode=()=>{
    if(mode== 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Blue Mode Enabled","success")
      document.title="TextUtils- BlueMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")
    }
  }

  const toggleModeBlack=()=>{
    if(mode== 'light'){
      setMode('dark')
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode Enabled","success")
      document.title="TextUtils- BlackMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")
    }
  }

  const toggleModeRed=()=>{
    if(mode== 'light'){
      setMode('dark')
      document.body.style.backgroundColor="red"
      showAlert("Red Mode Enabled","success")
      document.title="TextUtils- RedMode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Enabled","success")
    }
  }


  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeBlack={toggleModeBlack} toggleModeRed={toggleModeRed} />
      <Alerts alert={alert} />
      <div className="container my-3">
   {/*<Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeBlack={toggleModeBlack} toggleModeRed={toggleModeRed} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
  </Router>*/}
  <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} toggleMode={toggleMode} />
  </div>
   </>
  
  );
}

export default App;
