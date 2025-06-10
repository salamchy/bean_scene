import coffeeImg from '../assets/coffees.jpg'; 
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d2b48c] to-[#6f4e37] text-white pb-12 px-4 md:px-16">
      <Navbar />
      <div className="max-w-6xl py-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-primary">About Bean Scene</h1>
          <p className="text-lg text-white/90 leading-relaxed font-secondary">
            Welcome to <span className="font-bold text-yellow-300">Bean Scene</span>, your cozy digital coffee spot. We are passionate about crafting the perfect cup of coffee and creating a warm, inviting experience for every guest.
          </p>
          <p className="mt-4 text-white/90 font-secondary">
            From our ethically sourced beans to our expertly trained baristas, every part of your experience is brewed with care. Whether you're a coffee connoisseur or just starting your journey, Bean Scene is here to awaken your senses.
          </p>
          <p className="mt-4 text-white/80 italic font-secondary">“Life happens, coffee helps.”</p>
        </div>

        {/* Image Section */}
        <div className="w-full h-60 md:h-full rounded-lg overflow-hidden shadow-xl">
          <img
            src={coffeeImg}
            alt="Coffee cup"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-white/90 text-lg font-secondary">
          We blend passion, quality, and community into every single cup.
          With our rich flavors and relaxed ambiance, we’re more than just a coffee shop—we’re your second home.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">100% Arabica Beans</h3>
            <p className="text-white/80 text-sm font-secondary">Only the best beans make it into your cup.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Eco-Friendly</h3>
            <p className="text-white/80 text-sm font-secondary">We support sustainable farming and compostable packaging.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Locally Loved</h3>
            <p className="text-white/80 text-sm font-secondary">Proud to be a favorite community gathering place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
