import React, { useState, useEffect } from 'react'
import ProductFilterList from 'YesterTech/ProductFilterList'
import { getCategories } from './utils'

function ProductFilters() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    let isCurrentEffect = true;

    getCategories().then(categories => {
      if (isCurrentEffect) {
        setCategories(categories);
      }
    });

    // cleanup function executed before rerenders and on umount
    return () => {
      isCurrentEffect = false;
    };
  }, []);

  if (!categories) return <div>Loading Filters...</div>

  return (
    <div className="spacing">
      <ProductFilterList
        list={categories}
        urlKey="categories"
        label="Categories"
      />
    </div>
  )
}

export default ProductFilters
