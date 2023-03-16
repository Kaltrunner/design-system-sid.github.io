import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Nav from "./Nav";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
import Componentnav from "./Component-nav";
import Images from "./Images";
import Colors from "./Colors";
import Components from "./Components";
// import Fonts from "./Fonts";
import Forms from "./Forms"
import Typography from "./Typography";
import ProgressBar from "./ProgressBar";


import "./App.css";

function App() {
  return (
    <SlideRoutes>
      
      <Route path="/" element={<Main />} />
      <Route path="/Nav" element={<Nav />} />
      <Route path="/Component-nav" element={<Componentnav />} />
      <Route path="/Section" element={<Section />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="Colors" element={<Colors />} />
      <Route path="/Components" element={<Components />} />
      <Route path="/Images" element={<Images />} />
      {/* <Route path="/Fonts" element={<Fonts />} /> */}
      <Route path="/Forms" element={<Forms />} />
      <Route path="/Typography" element={<Typography />} />
      <Route path="/ProgressBar" element={<ProgressBar />} />
    </SlideRoutes>
  );
}

export default App;
