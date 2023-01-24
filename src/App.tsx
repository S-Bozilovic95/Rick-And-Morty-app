import "./App.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/global-comp/Navbar";
import { Locations } from "./components/locations/Locations";
import { Characters } from "./components/characters/Characters";
import { Episodes } from "./components/episodes/Episodes";
import videoBg from "../src/assets/videos/videoBg.mp4";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <video className="video-background" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/Episodes" element={<Episodes />} />
            <Route path="/Locations" element={<Locations />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
