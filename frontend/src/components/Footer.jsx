import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full relative text-white pt-12 md:pt-20"
      style={{
        backgroundImage: `url('./fotter_image.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4b2e1d] via-[#ab521f] to-transparent opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary mb-4">Bean Scene</h1>
          <p className="text-sm leading-relaxed font-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold font-secondary mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">News & Blogs</a></li>
            <li><a href="#" className="hover:underline">Help & Supports</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold font-secondary mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">How we work</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold font-secondary mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Tokha near Grandy Hospital,<br /> Kathmandu
            </li>
            <li>+977 980 00 76543</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
