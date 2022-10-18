import './App.scss';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Locations } from './components/Locations';
import { CharacterDetails } from './components/CharacterDetails';
import { Characters } from './components/Characters';
import { Episodes } from './components/Episodes';

const queryClient = new QueryClient();

function App() {
  return (
   <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
   </QueryClientProvider>
  );
}

export default App;
