import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.scss';
import { Home } from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
   <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home/>
      </div>
   </QueryClientProvider>
  );
}

export default App;
