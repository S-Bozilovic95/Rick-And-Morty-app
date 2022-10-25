import './App.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Locations } from './components/locations/Locations';
import { CharacterDetails } from './components/characters/CharacterDetails';
import { Characters } from './components/characters/Characters';
import { Episodes } from './components/episodes/Episodes';
import { ContextRmProvider } from './context/Context';

const queryClient = new QueryClient();

function App() {
  return (
   <QueryClientProvider client={queryClient}>
      <ContextRmProvider>
        <div className="App">
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Characters' element={<Characters/>}/>
              <Route path='/Episodes' element={<Episodes/>}/>
              <Route path='/Locations' element={<Locations/>}/>
              <Route path='/CharacterDetails/:charID' element={<CharacterDetails/>}/>
            </Routes>
          </Router>
        </div>
      </ContextRmProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
   </QueryClientProvider>
  );
}

export default App;
