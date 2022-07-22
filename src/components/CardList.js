import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getBaseUrl } from '../utils';
import CardItem from './CardItem';

function CardList({isLogedIn}) {

  const [products, setProducts] = useState([]);
  console.log(getBaseUrl());

  useEffect(() => {
    axios.get('https://eshop.reskimulud.my.id/products').then(res => setProducts(res.data.data.products));
  }, []);

  return (
    <div>
      <Row xs={1} xl={4} sm={2} lg={3} md={3}>
        {products.map((product) => (
          <Col key={product.id} className='mb-4'>
            <CardItem isLogedIn={isLogedIn} item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;