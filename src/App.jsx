import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Fleet from "./components/pages/Fleet";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
