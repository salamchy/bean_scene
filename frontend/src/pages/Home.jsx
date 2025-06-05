import Banner from '../components/Banner'
import Best_Coffee from '../components/Best_Coffee'
import Button from '../components/Button'
import Coffee_Style from '../components/Coffee_Style'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import We_Different from '../components/We_Different'

const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover"
        style={{ backgroundImage: "url('/coffee_image.png')" }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col w-full sm:w-11/12 md:w-3/4 lg:w-1/2 px-10 md:px-20 lg:px-32 mt-20 md:mt-10">
          <h3 className="text-white font-secondary text-base sm:text-lg md:text-xl">
            We’ve got your morning covered with
          </h3>

          <h1 className="text-white font-primary text-[80px] sm:text-[120px] md:text-[160px] lg:text-[220px] leading-none  md:py-5 mt-10 md:mt-5">
            coffee
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg font-secondary mt-10 md:mt-5">
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
          </p>

        </div>
        <div className="px-10 md:px-20 lg:px-32 mt-10 md:mt-5">
            <Button name="Order Now" />
          </div>
      </div>
      
      <Best_Coffee />
      <Coffee_Style />
      <We_Different />
      <Banner />
      <Feedback />
      <Footer />
      
    </div>
  )
}

export default Home
