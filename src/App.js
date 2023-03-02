import { Route } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Nav from "./Nav";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
import Colors from "./Colors";
import Typography from "./Typography";
import ProgressBar from "./ProgressBar";


import "./App.css";

function App() {
  return (
    <SlideRoutes>
      
      <Route path="/" element={<Main />} />
      <Route path="/Nav" element={<Nav />} />
      <Route path="/Section" element={<Section />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="Colors" element={<Colors />} />
      <Route path="/Typography" element={<Typography />} />
      <Route path="/ProgressBar" element={<ProgressBar />} />
    </SlideRoutes>
  );
}

export default App;
