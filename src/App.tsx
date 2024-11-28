import React from 'react';
import { SimpleFingerprint } from './components/SimpleFingerprint';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-purple-100/50 bg-grid-8" />
      <SimpleFingerprint />
    </div>
  );
}

export default App;