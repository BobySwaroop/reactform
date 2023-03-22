import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} and email is ${email} and city is ${city}`);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>Enter your city:
        <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default MyForm;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
