import About from "../layouts/About";
import Banner from "../layouts/Banner";
import ChoosePart from "../layouts/ChoosePart";
import DiscoverPart from "../layouts/DiscoverPart";
import Faq from "../layouts/Faq";
import Review from "../layouts/Review";
import SearchBar from "../layouts/SearchBar";
import Products from "../Products";


const Home = () => {
  return (
    <div>
     <Banner/>
     <SearchBar/>
     <About/>
     <Faq/>
     <DiscoverPart/>
     <ChoosePart/>
     <Review/>
  
    </div>
  );
};

export default Home;
