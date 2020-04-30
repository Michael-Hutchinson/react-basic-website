import React from 'react';

// includes
import './assets/css/default.min.css';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Test</p>
      <Footer />
    </div>
  );
}

export default App;