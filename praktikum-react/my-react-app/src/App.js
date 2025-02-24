import React, {useState}  from 'react';
import Counter from './Counter';
import Greetings from './Greeting';

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

function Example() { 
  const [name, setName] = useState(''); 
  const [age, setAge] = useState(0); 
  const [email, setEmail] = useState(''); 

  const handleNameChange = (e) => { 
    setName(e.target.value); 
  }; 

  const handleAgeChange = (e) => { 
    setAge(e.target.value); 
  };

  const handleEmailChange = (e) => { 
    setEmail(e.target.value); 
  };

  return ( 
    <div> 
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
      <input type="number" placeholder="Umur" value={age} onChange= {handleAgeChange} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /> 
      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p> 
    </div> 
  ); 
}

// Komponen App yang menggunakan Header, Main, Counter, Greetings, dan Footer
function App() { 
  return ( 
    <div> 
      <Header /> 
      <Main /> 
      <Greetings name="Tryo" />
      <Counter />
      <Example />
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

