// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';
// import './SignIn.css';

// const SignIn = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleToggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleMenuToggle = () => {
//     const navMenu = document.getElementById('navMenu');
//     if (navMenu.className === 'nav-menu') {
//       navMenu.className += ' responsive';
//     } else {
//       navMenu.className = 'nav-menu';
//     }
//   };

//   return (
//     <div className="wrapper">
//       <nav className="nav">
//         <div className="nav-logo">
//           <p>LOGO</p>
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
//           <button className={`btn ${isLogin ? 'white-btn' : ''}`} id="loginBtn" onClick={handleToggleForm}>SignIn</button>
//           <button className={`btn ${!isLogin ? 'white-btn' : ''}`} id="registerBtn" onClick={handleToggleForm}>SignUp</button>
//         </div>
//         <div className="nav-menu-btn">
//           <i className="bx bx-menu" onClick={handleMenuToggle}></i>
//         </div>
//       </nav>

//       <div className="form-box">
//         {isLogin ? (
//           <div className="login-container" id="login">
//             <div className="top">
//               <span>Don't have an account? <a href="#" onClick={handleToggleForm}>Sign Up</a></span>
//               <header>Login</header>
//             </div>
//             <div className="input-box">
//               <input type="text" className="input-field" placeholder="Username or Email" />
//               <i className="bx bx-user"></i>
//             </div>
//             <div className="input-box">
//               <input type="password" className="input-field" placeholder="Password" />
//               <i className="bx bx-lock-alt"></i>
//             </div>
//             <div className="input-box">
//               <input type="submit" className="submit" value="Sign In" />
//             </div>
//             <div className="two-col">
//               <div className="one">
//                 <input type="checkbox" id="login-check" />
//                 <label htmlFor="login-check"> Remember Me</label>
//               </div>
//               <div className="two">
//                 <label><a href="#">Forgot password?</a></label>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="register-container" id="register">
//             <div className="top">
//               <span>Have an account? <a href="#" onClick={handleToggleForm}>Login</a></span>
//               <header>Sign Up</header>
//             </div>
//             <div className="two-forms">
//               <div className="input-box">
//                 <input type="text" className="input-field" placeholder="Firstname" />
//                 <i className="bx bx-user"></i>
//               </div>
//               <div className="input-box">
//                 <input type="text" className="input-field" placeholder="Lastname" />
//                 <i className="bx bx-user"></i>
//               </div>
//             </div>
//             <div className="input-box">
//               <input type="text" className="input-field" placeholder="Email" />
//               <i className="bx bx-envelope"></i>
//             </div>
//             <div className="input-box">
//               <input type="password" className="input-field" placeholder="Password" />
//               <i className="bx bx-lock-alt"></i>
//             </div>
//             <div className="input-box">
//               <input type="submit" className="submit" value="Register" />
//             </div>
//             <div className="two-col">
//               <div className="one">
//                 <input type="checkbox" id="register-check" />
//                 <label htmlFor="register-check"> Remember Me</label>
//               </div>
//               <div className="two">
//                 <label><a href="#">Terms & conditions</a></label>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignIn;
