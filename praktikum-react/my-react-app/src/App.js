import React from 'react';
import Counter from './Counter';

// Komponen Header 
function Header() { 
  return ( 
    <header> 
      <h1>Aplikasi React Saya</h1> 
    </header> 
  ); 
} 

// Komponen Main 
function Main() { 
  return ( 
    <main> 
      <h2>Selamat datang di Aplikasi React Saya!</h2> 
      <p>Ini adalah area konten utama.</p> 
    </main> 
  ); 
} 

// Komponen Footer 
function Footer() { 
  return ( 
    <footer> 
      <p>&copy; 2025 Aplikasi React Saya</p> 
    </footer> 
  ); 
}

// Komponen App yang menggunakan Header, Main, Counter dan Footer
function App() { 
  return ( 
    <div> 
      <Header /> 
      <Main /> 
      <Counter />
      <Footer /> 
    </div> 
  ); 
} 

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

