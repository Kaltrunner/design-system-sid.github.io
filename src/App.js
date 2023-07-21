import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Main from "./Main";
import Images from "./Images";
import Colors from "./Colors";
import Components from "./Components";
import Forms from "./Forms";
import Typography from "./Typography";
import "./App.css";

function App() {
  return (
    <>
      <SlideRoutes>
        <Route path="/" element={<Main />} />
        <Route path="Colors" element={<Colors />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Images" element={<Images />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/Typography" element={<Typography />} />
      </SlideRoutes>
    </>
  );
}

export default App;
