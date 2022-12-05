import "./App.scss";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Locations } from "./components/locations/Locations";
import { CharacterDetails } from "./components/characters/CharacterDetails";
import { Characters } from "./components/characters/Characters";
import { Episodes } from "./components/episodes/Episodes";
import { ContextRmProvider } from "./context/Context";
import videoBg from "../src/assets/videos/videoBg.mp4";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextRmProvider>
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
              <Route
                path="/CharacterDetails/:charID"
                element={<CharacterDetails />}
              />
            </Routes>
          </Router>
        </div>
      </ContextRmProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
