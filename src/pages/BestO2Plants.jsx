import BestO2 from '../components/BestO2'
import Aglaonema from "../assets/Aglaonema.png";

function BestO2Plants(){
    return(
                <>
                    <div className="pt-30">
                        <div>
                            <div className="flex justify-center items-center mt-10 sm:mt-0">
                                <div className="relative p-4 px-6 sm:px-10">
                                <div className="absolute top-1 right-3 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#FBD300] rounded-tr-xl" />
                                <div className="absolute bottom-2 sm:bottom-1 left-3 sm:left-5 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#FBD300] rounded-bl-xl" />
                                <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-['Inter']">
                                    Our Best O2 
                                </h1>
                                </div>
                            </div>
                        </div>
        
                        
                        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-10">
            
                            
                                
                                <BestO2
                                    img = {Aglaonema}
                                    title = "We Have Small And Best O2 Plants Collection’s"
                                    desc1 = 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.'
                                    desc2 = "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe."
                                />
                                <br/>
                                <br/>
                                <div className="flex mt-6 sm:mt-8 justify-center items-center">
                                    <div className="w-4 sm:w-5 h-1.5 sm:h-2 bg-white rounded-3xl"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-[50%] ml-3"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-[50%] ml-3"></div>
                                </div>
        
                            
        
                        </div>
                    </div>
                
                </>
    )
}
export default BestO2Plants