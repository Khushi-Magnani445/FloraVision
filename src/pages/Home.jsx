import Main from "./Main";
import TopSelling from "./TopSelling"
import CustomerReview from "./CustomerReview"
import BestO2Plants from "./BestO2Plants"
import Footer from "../components/Footer"


function Home(){
    return (
    <>
       <div>
          <Main />
       </div>
       <div className="bg-[#1A2215]">
        <TopSelling/>
       </div>
       <div className="bg-[#1A2215]">
        <CustomerReview/>
       </div>
       <div className="bg-[#1A2215]">
        <BestO2Plants/>
       </div>
       <div className="bg-[#1A2215]">
        <Footer/>
       </div>
    </>
  );
}
export default Home