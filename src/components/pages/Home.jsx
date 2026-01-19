import About from "../layouts/About";
import Banner from "../layouts/Banner";
import DiscoverPart from "../layouts/DiscoverPart";
import Faq from "../layouts/Faq";
import SearchBar from "../layouts/SearchBar";


const Home = () => {
  return (
    <div>
     <Banner/>
     <SearchBar/>
     <About/>
     <Faq/>
     <DiscoverPart/>
    </div>
  );
};

export default Home;
