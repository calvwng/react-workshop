import React from 'react'
import ReactDOM from 'react-dom'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import Heading from 'YesterTech/Heading'
import 'YesterTech/styles/global-styles.scss'
import 'YesterTech/StarRatings.scss'
import 'YesterTech/styles/center-lesson.scss'
import StarRatings from './StarRatings';

const products = [
  {
    id: 1,
    name: 'Mario Kart',
    rating: 5,
    brand: 'Nintendo',
    condition: 'new'
  },
  {
    id: 2,
    name: 'Donkey Kong',
    rating: 3.5,
    brand: 'Nintendo',
    condition: 'good'
  },
  {
    id: 3,
    name: 'Nintendo NES',
    rating: 4,
    brand: 'Nintendo',
    condition: 'fair'
  }
]

function BrowseProducts() {
  return (
    <div>

      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            Rating: <StarRatings rating={product.rating}></StarRatings>
            <div>Brand: {product.brand}</div>
          </div>
        );
      })}

    </div>
  );
}

ReactDOM.render(<BrowseProducts />, document.getElementById('root'))
