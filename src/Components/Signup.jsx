
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Appcontext } from '../App';
const Signup = () => {
    const{setuser}=useContext(Appcontext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("Signing up with:", { name, email, password });
    localStorage.setItem("user",JSON.stringify({name,email,password}));
    setuser({name,email,password})
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

