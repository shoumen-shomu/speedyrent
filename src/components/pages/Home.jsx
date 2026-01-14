import About from "../layouts/About";
import Banner from "../layouts/Banner";
import Faq from "../layouts/Faq";
import SearchBar from "../layouts/SearchBar";


const Home = () => {
  return (
    <div>
     <Banner/>
     <SearchBar/>
     <About/>
     <Faq/>
    </div>
  );
};

export default Home;
