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
import Forms from "./Forms"
import Typography from "./Typography";
import Clock from "./Clock";
import Fullclock from "./Fullclock";


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
      <Route path="/Forms" element={<Forms />} />
      <Route path="/Typography" element={<Typography />} />
      <Route path="/Clock" element={<Clock />} />
      <Route path="/Fullclock" element={<Fullclock />} />
    </SlideRoutes>
  );
}

export default App;
