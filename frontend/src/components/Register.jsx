import { useRegisterUserMutation } from '../redux/services/authApi';
import { setUser } from '../redux/features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form).unwrap();
      dispatch(setUser(res));
      toast.success("Account created successfully!");
      navigate('/');
    } catch (err) {
      console.error('Registration failed:', err);
      const errorMsg = err?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d2b48c] to-[#6f4e37] p-4">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 md:p-10 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center font-primary">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-yellow-500 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
