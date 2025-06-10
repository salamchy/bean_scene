import { useState } from 'react';
import { useCreateMessageMutation } from '../redux/services/contactApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [createMessage, { isLoading }] = useCreateMessageMutation();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMessage(formData).unwrap();
      toast.success('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('❌ Failed to send message. Please login first.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d2b48c] to-[#6f4e37] text-white pb-12 px-6 md:px-20">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 font-primary">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl space-y-6"
        >
          <div>
            <label className="block mb-2 text-white font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none "
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-white font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-white font-semibold" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none "
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-full transition duration-300"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
