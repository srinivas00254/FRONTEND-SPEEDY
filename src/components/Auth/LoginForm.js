// import React, { useState } from 'react';
// import LoginForm from './LoginForm';
// import RegistrationForm from './RegistrationForm';
// import './style.css';

// const App = () => {
//   const [isLoginForm, setIsLoginForm] = useState(true);

//   const toggleForm = () => {
//     setIsLoginForm(!isLoginForm);
//   };

//   return (
//     <div className="wrapper">
//       <nav className="nav">
//         <div className="nav-logo">
//           <p>LOGO .</p>
//         </div>
//         <div className="nav-menu" id="navMenu">
//           <ul>
//             <li><a href="#" className="link active">Home</a></li>
//             <li><a href="#" className="link">Blog</a></li>
//             <li><a href="#" className="link">Services</a></li>
//             <li><a href="#" className="link">About</a></li>
//           </ul>
//         </div>
//         <div className="nav-button">
//           <button className={`btn ${isLoginForm ? 'white-btn' : ''}`} onClick={() => setIsLoginForm(true)}>Sign In</button>
//           <button className={`btn ${!isLoginForm ? 'white-btn' : ''}`} onClick={() => setIsLoginForm(false)}>Sign Up</button>
//         </div>
//         <div className="nav-menu-btn">
//           <i className="bx bx-menu" onClick={() => document.getElementById("navMenu").classList.toggle("responsive")}></i>
//         </div>
//       </nav>

//       <div className="form-box">
//         {isLoginForm ? <LoginForm toggleForm={toggleForm} /> : <RegistrationForm toggleForm={toggleForm} />}
//       </div>
//     </div>
//   );
// };

// export default App;
