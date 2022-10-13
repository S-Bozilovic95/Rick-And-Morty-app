import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import './App.scss';
import { Home } from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
   <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home/>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
   </QueryClientProvider>
  );
}

export default App;
