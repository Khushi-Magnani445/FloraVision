import Aglaonema from "../assets/Aglaonema.png";
import bag from "../assets/bag.png";
import desk_decor from "../assets/desk_decor.png";
import cactus from "../assets/cactus.png";
import swiss_cheese from "../assets/swiss_cheese.png";
import agave from "../assets/agave.png";
import sansevieria from "../assets/sansevieria.png";
function TopSelling(){
    return(
        <>
            <div className="pt-50">
                <div>
                    <div className="flex justify-center items-center mt-10 sm:mt-0">
                        <div className="relative p-4 px-6 sm:px-10">
                        <div className="absolute top-3 right-3 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#FBD300] rounded-tr-xl" />
                        <div className="absolute bottom-2 sm:bottom-1 left-3 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#FBD300] rounded-bl-xl" />
                        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-['Inter']">
                            Our Top Selling Plants
                        </h1>
                        </div>
                    </div>
                </div>

                {/* 6 block grid for top selling plants */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-50">
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-42 place-items-center">
                        
                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={Aglaonema} 
                                        alt="Aglaonema" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Aglaonema Plant</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1  font-['Inter']">The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2 ">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 300/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>
                            
                        
        
                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={desk_decor} 
                                        alt="desk_decor" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Plantain Lilies</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1  font-['Inter']">Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 380/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>

                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={cactus} 
                                        alt="cactus" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Cactus</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1  font-['Inter']">It is known for their ability to thrive in arid environments</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 259/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>

                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={swiss_cheese} 
                                        alt="swiss_cheese" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Swiss cheese Plant</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1  font-['Inter']">It is a popular tropical houseplant known for its distinctive, perforated leaves</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 400/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>

                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={sansevieria} 
                                        alt="sansevieria" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Sansevieria plant</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1  font-['Inter']">It is a popular indoor plant admired for its striking appearance and low-maintenance nature.</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 450/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>

                        <div className="relative w-full max-w-[350px] h-[420px] sm:h-[480px]  rounded-b-[40px] rounded-tl-[120px] rounded-tr-[120px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl cursor-pointer">
                            <img src={agave} 
                                        alt="agave" 
                                        className="absolute -top-[70px] sm:-top-[140px] left-1/2 -translate-x-1/2 w-50 sm:w-80 h-54 sm:h-90 object-cover rounded-lg shadow-md" />
                            <div className="absolute top-36 sm:top-60 left-1/2 -translate-x-1/2 w-[80%] h-[45%] flex flex-col">
                            <div className="mt-1">
                                <p className="text-white font-normal text-xl sm:text-[25px] font-['Inter']">Agave plant</p>
                                <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full max-w-[260px] pt-1 font-['Inter']">The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.</p>
                            </div>
                            <div className="flex justify-between items-center w-full max-w-[260px] mt-auto pb-2">
                                <p className="text-white font-normal text-xl sm:text-[25px] pt-2 font-['Inter']">Rs. 359/-</p>
                                <button className="border border-white text-white py-1 mt-1 rounded-xl w-[35px] h-[35px] mr-4 flex justify-center item-center cursor-pointer">
                                    <img src={bag} alt="bag" className="w-[20px] h-[20px] object-cover rounded-lg shadow-md"/>
                                </button>
                            </div>
                            
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
        </>
    )
}

export default TopSelling