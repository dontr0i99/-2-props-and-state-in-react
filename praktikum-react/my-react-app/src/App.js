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

// Komponen Todo List (TUGAS)
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px", padding: "20px", background: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "10px" }}>Todo List</h1>
      <form style={{ display: "flex", gap: "10px", marginBottom: "20px" }} onSubmit={handleAddTask}>
        <input
          type="text"
          style={{ flex: "1", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          placeholder="Tambah tugas baru"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" style={{ padding: "8px 12px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Tambah</button>
      </form>
      {tasks.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>No.</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Tugas</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{task}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Komponen App yang menggunakan Header, Main, Counter, Greetings, Example, TodoList  dan Footer
function App() { 
  return ( 
    <div> 
      <Header /> 
      <Main /> 
      <Greetings name="Tryo" />
      <Counter />
      <Example />
      <TodoList />
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

