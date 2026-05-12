import background from "../assets/background.jpg";
import Aglaonema from "../assets/Aglaonema.png";
import Profile from "../assets/profile.png";
import desk_decor from "../assets/desk_decor.png";
import bag from "../assets/bag.png";
import rose_gold_desk_decor from "../assets/rose_gold_desk_decor.png";
import Navbar from "../components/Navbar.jsx";
import { Play,ChevronRight,Star,StarHalf } from 'lucide-react';
function Main() {
  return (
    <div
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        relative
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      

      {/* Main */}
      <div className="relative z-10 px-4 sm:px-7 lg:px-11 pt-9">

        {/* Navbar */}
        <Navbar/>

        {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-4">
        <div className="mt-16 sm:mt-40 lg:mt-[400px] max-w-full lg:max-w-[700px]">
          <h2 className="text-white text-5xl sm:text-7xl lg:text-[100px] font-bold font-['Inter']">
            Earth’s Exhale
          </h2>

          <p className="text-gray-300 text-sm sm:text-base lg:text-[20px] ml-1 font-['Inter']">
            "Earth Exhale" symbolizes the purity and vitality
            of the Earth's natural environment and its
            essential role in sustaining life.
          </p>

          
          <div className="flex items-center gap-3 sm:gap-6 mt-4">
            <button
              className="
                border
                border-white
                text-white
                px-4 sm:px-8
                py-2 sm:py-3
                rounded-xl
                w-[130px] sm:w-[175px]
                cursor-pointer
                text-base sm:text-[22px]
              "
            >
              Buy Now
            </button>

            <button className="flex items-center justify-center p-3 sm:p-4 border-2 border-white text-white rounded-full transition shadow-lg cursor-pointer">
              <Play className="fill-current" size={24} />
            </button>
            <p className="text-white font-['Indie_Flower'] font-light text-sm sm:text-[20px]">Live Demo...</p>
          </div>
        </div>
        <div className="relative w-full sm:w-100 h-[420px] sm:h-160 mt-16 sm:mt-100 ml-auto rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl lg:row-span-2">
            <img src={Aglaonema} 
                        alt="Aglaonema" 
                        className="absolute -top-[70px] sm:-top-[110px] left-1/2 -translate-x-1/2 w-60 sm:w-100 h-72 sm:h-110 object-cover rounded-lg shadow-md" />
            <div className="absolute top-56 sm:top-98 ml-6 sm:ml-12">
              <p className="text-white font-light text-base sm:text-[20px] font-['Inter']">Indoor Plant</p>
              <div className="flex justify-between w-64 sm:w-80">
                <p className="text-white font-semi-bold text-xl sm:text-[30px] font-['Inter']">Aglaonema Plant</p>
                <ChevronRight className="text-white mt-2 sm:mt-3 cursor-pointer" size={24}/>
              </div>
              <button
              className="
                border
                border-white
                text-white
                px-1
                py-2
                mt-2
                rounded-xl
                w-[160px]
                w-[130px] sm:w-[160px]
                text-base sm:text-[22px]
                cursor-pointer
              "
            >
              Buy Now
            </button>
            <div className="flex mt-6 sm:mt-8 justify-center">
              <div className="w-4 h-1 bg-white rounded-3xl"></div>
              <div className="w-1 h-1 bg-white rounded-[50%] ml-2"></div>
              <div className="w-1 h-1 bg-white rounded-[50%] ml-2"></div>
            </div>
            </div>
            
        </div>
        <div>
          <div className="relative w-full sm:w-100 h-auto sm:h-60 mt-8 sm:mt-60 pb-6 sm:pb-0 rounded-[40px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl">
              <div className="flex justify-evenly mt-8 sm:mt-12 ml-3">
                <img src={Profile} 
                        alt="Profile" 
                        className="w-12 h-12 sm:w-15 sm:h-15 object-cover rounded-[50%] shadow-md" />
                <div className="w-[70%] ml-2">
                  <p className="text-white font-light text-base sm:text-xl mt-2 font-['Inter']">Ronnie Hamill</p>
                  <div className="w-24 flex justify-between">
                    <Star className="text-yellow-400 fill-yellow-400 mt-1" size={14}/>
                    <Star className="text-yellow-400 fill-yellow-400 mt-1" size={14}/>
                    <Star className="text-yellow-400 fill-yellow-400 mt-1" size={14}/>
                    <Star className="text-yellow-400 fill-yellow-400 mt-1" size={14}/>
                    <StarHalf className="text-yellow-400 fill-yellow-400 mt-1" size={14}/>
                    
                  </div>
                </div>
              </div>
            <div className="ml-5 sm:ml-7 w-[85%] sm:w-[68%] mt-4">
              <p className="text-gray-300 text-xs sm:text-[15px] ml-1 text-justify mr-auto font-['Inter']">
                I can't express how thrilled I am with my 
                new natural plants! They bring such a 
                fresh and vibrant energy to my home.</p>
            </div>
          </div>
        </div>
        </div>
        
        {/* Trendy Plants Section*/}
        <div>

          <div className="flex justify-center items-center mt-10 sm:mt-0">
            <div className="relative p-4 px-6 sm:px-10">
              <div className="absolute top-4 right-3 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#FBD300] rounded-tr-xl" />
              <div className="absolute bottom-3 sm:bottom-2 left-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#FBD300] rounded-bl-xl" />
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-['Inter']">
                Our Trendy Plants
              </h1>
            </div>
          </div>


          <div className="relative w-full mt-10 sm:mt-80 ml-auto rounded-[60px] sm:rounded-[151px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl">
            
            
            <div className="flex flex-col items-center pt-6 sm:hidden">
              <img src={desk_decor} alt="Desk_decor plant" className="w-44 h-44 object-cover rounded-lg shadow-md" />
            </div>
 
            
            <img src={desk_decor} alt="Desk_decor plant" className="hidden sm:block absolute -top-[160px] ml-10 w-130 h-150 object-cover rounded-lg shadow-md" />
 
            <div className="w-full sm:w-[60%] flex flex-col justify-center sm:ml-[50%] px-6 sm:px-0 py-6 sm:py-0 sm:h-110">
              <p className="text-white font-semi-bold text-xl sm:text-[30px] pb-2 sm:pb-4 font-['Inter']">For Your Desks Decorations</p>
              <p className="text-white font-light text-sm sm:text-[20px] text-justify w-full sm:w-160 font-['Inter']">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
              <p className="text-white font-semi-bold text-xl sm:text-[30px] mt-2 font-['Inter']">Rs. 599/-</p>
              <div className="flex mt-2">
                <button className="border border-white text-white px-1 py-2 mt-2 rounded-xl w-[130px] sm:w-[160px] text-base sm:text-[22px] cursor-pointer">
                  Explore
                </button>
                <button className="border border-white text-white px-1 py-2 mt-2 rounded-xl w-[50px] ml-4 sm:ml-6 flex justify-center item-center cursor-pointer">
                  <img src={bag} alt="Plant 1" className="w-[34px] h-[34px] object-cover rounded-lg shadow-md"/>
                </button>
              </div>
            </div>
          </div>

        <div className="relative w-full mt-10 sm:mt-50 ml-auto rounded-[60px] sm:rounded-[151px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl mb-16 sm:mb-0">
 
            
            <div className="flex flex-col items-center pt-6 sm:hidden">
              <img src={rose_gold_desk_decor} alt="Desk_decor plant" className="w-44 h-44 object-cover rounded-lg shadow-md" />
            </div>
 
            <div className="flex flex-col justify-center sm:ml-24 px-6 sm:px-0 py-6 sm:py-0 w-full sm:w-auto sm:h-110">
              <p className="text-white font-semi-bold text-xl sm:text-[30px] pb-2 sm:pb-4 font-['Inter']">For Your Desks Decorations</p>
              <p className="text-white font-light text-sm sm:text-[20px] text-justify w-full sm:w-160 font-['Inter']">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
              <p className="text-white font-semi-bold text-xl sm:text-[30px] mt-2 font-['Inter']">Rs. 399/-</p>
              <div className="flex mt-2">
                <button className="border border-white text-white px-1 py-2 mt-2 rounded-xl w-[130px] sm:w-[160px] text-base sm:text-[22px] cursor-pointer">
                  Explore
                </button>
                <button className="border border-white text-white px-1 py-2 mt-2 rounded-xl w-[50px] ml-4 sm:ml-6 flex justify-center item-center cursor-pointer">
                  <img src={bag} alt="Plant 2" className="w-[34px] h-[34px] object-cover rounded-lg shadow-md"/>
                </button>
              </div>
            </div>
 
            <img src={rose_gold_desk_decor} alt="Desk_decor plant" className="hidden sm:block absolute -top-[160px] right-0 mr-10 w-130 h-150 mt-6 object-cover rounded-lg shadow-md" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;