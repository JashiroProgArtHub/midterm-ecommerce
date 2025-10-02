import { Link } from "react-router-dom";

// branch: feature/products-api

const Home = () => {


  return (
    <div className="home w-full h-full bg-white">
      {/* Top Banner */}
      <div className="top_banner relative h-[525px] md:h-[525px] shadow-xl rounded-xl overflow-hidden mb-8">
        <div className="content absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-neutral">
          <h3 className="text-lg md:text-xl font-medium uppercase tracking-wide">
            30% off your first order
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Welcome to ShopEasy!
          </h2>
          <p className="text-base md:text-lg text-muted mb-6">
            Discover amazing deals and trending products today!
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-inverse font-semibold px-6 py-3 rounded-lg shadow-md 
                       hover:bg-secondary hover:shadow-lg transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
