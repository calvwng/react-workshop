import React, { useState, useEffect } from 'react'
import ProductFilters from 'YesterTech/ProductFilters'

function ProductsSidebar() {
  const [isWide, setIsWide] = useState(
    window.matchMedia('(min-width: 800px)').matches
  );
  
  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => {
      console.log('how many times');
      setIsWide(media.matches);
    };

    media.addListener(listener);

    return () => {
      // prevent listener when sidebar unloads (e.g. when you navigate to diff route)
      media.removeListener(listener);
    };
  }, []);

  return isWide ? (
    <aside>
      <ProductFilters />
    </aside>
  ) : null;
}

export default ProductsSidebar
