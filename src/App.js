import React from "react";
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

import { Card } from 'react-bootstrap'
import productDetails from "./product";
import './app.css'


// const firstName = 'StringsBob';   I commented this line out becuase i don't really know to implement it to do what was required
function App() {
    
  return (
    <div>
        {/* I declared the bootstrap react-card component which i have imported above here */}
        <Card>
           <Card.Body style={{margin: 0}}>
            <Name name={productDetails.name} />
            <Price price={productDetails.price} />
            <Description description={productDetails.description} />
            <Image  image={productDetails.image} />
           </Card.Body>
           {/* <p className="hi">{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</p> */}
        </Card>


        
    </div>
  );
}

export default App;
