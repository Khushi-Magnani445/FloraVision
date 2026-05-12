import { Star,StarHalf } from 'lucide-react';

function Customer({profile,name,review}){
    return(
        <>
            <div className="relative w-full sm:w-80 h-auto sm:h-80 pb-6 sm:pb-0 rounded-[45px] bg-gray-500/20 backdrop-blur-lg border border-white/20 shadow-2xl items-center">
                          <div className="flex justify-evenly mt-8 sm:mt-12 ml-3">
                            <img src={profile} 
                                    alt="Profile" 
                                    className="w-12 h-12 sm:w-15 sm:h-15 object-cover rounded-[50%] shadow-md" />
                            <div className="w-[70%] ml-2">
                              <p className="text-white text-base sm:text-xl mt-2 font-['Inter'] font-bold">{name}</p>
                              <div className="w-24 flex justify-between">
                                <Star className="text-yellow-400 fill-yellow-400 mt-1" size={10}/>
                                <Star className="text-yellow-400 fill-yellow-400 mt-1" size={10}/>
                                <Star className="text-yellow-400 fill-yellow-400 mt-1" size={10}/>
                                <Star className="text-yellow-400 fill-yellow-400 mt-1" size={10}/>
                                <StarHalf className="text-yellow-400 fill-yellow-400 mt-1" size={10}/>
                                
                              </div>
                            </div>
                          </div>
                        <div className="ml-5 sm:ml-7 w-[90%] sm:w-[78%] mt-8">
                          <p className="text-gray-300 text-xs sm:text-[15px] ml-1 text-justify mr-auto font-['Inter']">
                            {review}</p>
                        </div>
            </div>
        </>
    )
}

export default Customer