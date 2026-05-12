import { ChevronRight,ChevronLeft } from 'lucide-react';

function BestO2({img,title,desc1,desc2}){
    return(
        <>
            <div className="relative w-full max-w-7xl mx-auto mt-10 sm:mt-80 rounded-[60px] sm:rounded-[92px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl ">
                        
                        
                        <div className="flex flex-col items-center pt-6 sm:hidden">
                          <img src={img} alt="Desk_decor plant" className="w-44 h-44 object-cover rounded-lg shadow-md" />
                        </div>
             
                        
                        <img src={img} alt="Desk_decor plant" className="hidden sm:block absolute -top-[160px] ml-2 w-130 h-150 object-cover rounded-lg shadow-md" />
             
                        <div className="w-full sm:w-[40%] flex flex-col justify-center sm:ml-[45%] px-6 sm:px-0 py-6 sm:py-0 sm:h-110">
                          <p className="text-white font-semi-bold text-xl sm:text-[26px] pb-2 sm:pb-4 font-['Inter'] text-justify">{title}</p>
                          <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full sm:w-134 font-['Inter']">{desc1}</p><br/>
                          <p className="text-white font-light text-sm sm:text-[18px] text-justify w-full sm:w-134 font-['Inter']">{desc2}</p>
                          
                          <div className="flex mt-2">
                            <button className="border border-white text-white px-1 py-2 mt-2 rounded-xl w-[130px] sm:w-[160px] text-base sm:text-[22px] cursor-pointer">
                              Explore
                            </button>
                            <div className="flex justify-between w-full sm:w-auto sm:ml-auto">
                                <button className="px-1 py-2 mt-3 ml-4 sm:ml-6 flex justify-center item-center cursor-pointer">
                                    <ChevronLeft className="text-white" size={20}/>
                                </button>
                                <div className="flex items-center px-auto">
                                    <div className="text-xl text-white">01/</div><span className="text-sm text-white mt-1">04</span>
                                </div>
                                <button className="px-1 py-2 mt-3  ml-4 sm:ml-6 flex justify-center item-center cursor-pointer">
                                    <ChevronRight className="text-white" size={20}/>
                                </button>
                            </div>
                          </div>
                        </div>
            </div>
        </>
    )
}

export default BestO2