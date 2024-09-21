// pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    // Simulación de llamada a la API para autenticación
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === 'admin@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'mock-token');
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
      toast.error('Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-sand-dollar">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl">
        <div className="w-full md:w-1/2">
          <img
            src="https://img.freepik.com/foto-gratis/jovenes-amigos-hermosos-viajeros-mochilas-caminando-canon_176420-4253.jpg?t=st=1726875929~exp=1726879529~hmac=654852e712de9529a539c0cb11694f7138f47bb7c69733f10d7e0b0320b5d698&w=1380"
            alt="Travel Friends"
            className="object-cover w-full h-full transition-transform transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-forest-green mb-6">Login to Admin Panel</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-blue"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-misty-blue"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold transition ${loading ? 'bg-gray-400' : 'bg-forest-green hover:bg-dusty-rose'} text-white`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="/#" className="text-forest-green hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
