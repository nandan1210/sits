import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Defining My First Component
function Test(){
  return <center><h1>This Is My Own Component......</h1></center>;
}
//Anonymous Function Based Component
var Z=function (){
  return <center><h1>This Is My Anonymous Component......</h1></center>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//Routing My First Component
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    <Test />
);

//Routing My Anonymous Component
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <Z />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
