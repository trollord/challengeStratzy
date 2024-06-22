import React from 'react';
import Pricing from './components/Pricing/pricing';
import FeatureGrid from './components/FeatureGrid/featureGrid';
import Header from './components/Header/header';

function App() {
  return (
    <>
      {/* Example Component */}
      <div>
        <div style={{ backgroundColor: '#262429' }} className="rounded-3xl border border-orange-700 max-w-xl mx-auto m-16 relative overflow-visible">
          {/* SVG Image */}
          <Header />
          <div className="grid m-8 grid-cols-2 gap-6 text-white relative z-20">
            <FeatureGrid />
          </div>
          <Pricing />
        </div>
      </div>
    </>
  );
}

export default App;
