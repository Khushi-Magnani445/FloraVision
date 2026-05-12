
import Customer from '../components/Customer.jsx'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.png'

function CustomerReview(){
    return(
                <>
                    <div className="pt-30">
                        <div>
                            <div className="flex justify-center items-center mt-10 sm:mt-0">
                                <div className="relative p-4 px-6 sm:px-10">
                                <div className="absolute top-3 right-3 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#FBD300] rounded-tr-xl" />
                                <div className="absolute bottom-2 sm:bottom-1 left-3 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#FBD300] rounded-bl-xl" />
                                <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight font-['Inter']">
                                    Customer Review
                                </h1>
                                </div>
                            </div>
                        </div>
        
                        {/* 6 block grid for top selling plants */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-30">
            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 place-items-center">
                                
                                <Customer
                                    profile = {profile1}
                                    name = "Shelly Russel"
                                    review = "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
                                />

                                <Customer
                                    profile = {profile2}
                                    name = "Lula Rolfson"
                                    review = "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
                                />

                                <Customer
                                    profile = {profile3}
                                    name = "Carol Huels"
                                    review = "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
                                />
        
                            </div>
        
                        </div>
                    </div>
                
                </>
    )
}
export default CustomerReview