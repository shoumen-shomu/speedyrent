import About from "../layouts/About";
import Banner from "../layouts/Banner";
import Blogs from "../layouts/Blogs";
import ChoosePart from "../layouts/ChoosePart";
import DiscoverPart from "../layouts/DiscoverPart";
import Faq from "../layouts/Faq";
import Review from "../layouts/Review";
import SearchBar from "../layouts/SearchBar";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchBar />
      <About />
      <Faq />
      <DiscoverPart />
      <ChoosePart />
      <Review />
      <Blogs/>
    </div>
  );
};

export default Home;
