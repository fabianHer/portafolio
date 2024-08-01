import React from 'react';
import { MainContent, FloatingButton, Footer}  from './components/share';
import { AppProvider } from './context/AppContext';
import Background from './components/share/Background';

function App() {
  
  return (
    <AppProvider>
       <Background />
       <FloatingButton />
       <MainContent />
    </AppProvider>
  );
}

export default App;
