import logo from '../assets/logo.png'

function Footer(){
    return(
        <>
            <footer className="w-full pt-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10">
                        <div>
                            <div className="flex items-center ">
                                        <img src={logo} 
                                        alt="Logo" 
                                        className="w-14 h-16 object-cover rounded-lg shadow-md" />
                                        <h1 className="text-white text-[28px] sm:text-[36px] font-bold ml-2 cursor-pointer">
                                        FloraVision.
                                    </h1>
                            </div>

                            <p className="text-gray-200 text-base sm:text-[18px] mt-16 leading-9 max-w-[420px]">
                                "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                            </p>

                            
                            <div className="flex gap-10 mt-16">
                                <button className="text-white text-3xl font-bold cursor-pointer hover:scale-110 transition">
                                FB</button>

                                <button className="text-white text-3xl font-bold cursor-pointer hover:scale-110 transition">
                                TW</button>

                                <button className="text-white text-3xl font-bold cursor-pointer hover:scale-110 transition">
                                LI</button>
                            </div>

                        </div>
                    
                        <div className="lg:ml-20">
                            <h2 className="text-white text-2xl font-bold">
                                Quick Link’s
                            </h2>

                            <ul className="flex flex-col gap-5 mt-10">
                                <li className="text-gray-200 text-xl underline cursor-pointer hover:text-white transition">
                                Home</li>
                                <li className="text-gray-200 text-xl underline cursor-pointer hover:text-white transition">
                                Type’s Of plant’s</li>
                                <li className="text-gray-200 text-xl underline cursor-pointer hover:text-white transition">
                                Contact</li>
                                <li className="text-gray-200 text-xl underline cursor-pointer hover:text-white transition">
                                Privacy</li>
                            </ul>
                        </div>

                    
                        <div>
                            <h2 className="text-white text-2xl font-bold">For Every Update.</h2>
                            <div className="flex flex-col sm:flex-row mt-10 border border-white rounded-xl overflow-hidden max-w-[450px]">
                                <input type="email" placeholder="Enter Email" className="flex-1 bg-transparent px-5 py-4 text-white"/>
                                <button className="bg-white text-black font-bold px-6 py-4 cursor-pointer">SUBSCRIBE</button>
                            </div>
                            <p className="text-gray-200 text-lg mt-16">FloraVision © all right reserve</p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer