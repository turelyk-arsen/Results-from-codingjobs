// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// first 
// const inputClick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse over")
// const helpText = "Help text!"
// const element = (<div className = "container  bg-primary-subtle"> 
//     <h1>{helpText}</h1>
//     <input placeholder={helpText} onClick={inputClick} onMouseEnter = {mouseOver} />
//     <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
//     </div>)
//
// const app = document.getElementById("app")
// ReactDOM.render(element, app)
//
// const app = ReactDOMClient.createRoot(document.getElementById("app"))
// app.render(element)

//second with component


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';

    const app = ReactDOM.createRoot(document.getElementById("app"))
    app.render(<App/>)
    


 