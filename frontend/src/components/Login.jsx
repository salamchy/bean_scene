import { useLoginUserMutation } from '../redux/services/authApi';
import { setUser } from '../redux/features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form).unwrap();
      dispatch(setUser(res));

      // Role-based navigation (optional)
      if (res?.user?.role === 'admin') {
        toast.success("Welcome Admin!");
        navigate('/dashboard');
      } else {
        toast.success("Login successful!");
        navigate('/');
      }

    } catch (err) {
      console.error('Login failed:', err);
      const errorMsg = err?.data?.message || 'Invalid email or password.';
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d2b48c] to-[#6f4e37] p-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 md:p-10 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center font-primary">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-yellow-500 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
