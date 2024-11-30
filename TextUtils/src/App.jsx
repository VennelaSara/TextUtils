
// import './App.css'
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import MyAlert from './components/MyAlert';
import {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
let [mode,setMode] = useState('light');
let [alert,setAlert] = useState('');
const showAlert = (message,type)=>{
setAlert(
  {
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },1500);
}
const toggleMode = ()=>{
  if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert('Dark Mode has been Enabled',"success");
    document.title="TextUtils - DarkMode";
    setInterval(()=>{
document.title = "Text Utils is Amazing";
    },1500);
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert('Light Mode has been Enabled',"success");
    document.title="TextUtils - DarkMode";
  }
}
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="about TextUtils" mode={mode} showAlert={showAlert} toggleMode={toggleMode}></Navbar>
    <MyAlert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}></TextForm> 
      {/* /USERS-->COMPONENT - 1
      /USERS/HOME-->COMPONENT - 2 */}
      {/* <Routes>
        <Route exact path="/about" element={<About></About>}>
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}></TextForm>}>
        
         {/* <Home></Home>  */}
        {/* </Route>
      </Routes> */}
      {/* <TextForm heading="Enter the text to analyze below" mode={mode}></TextForm> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  )
}

export default App;
