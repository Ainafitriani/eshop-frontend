// card item
import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { MdShoppingCart } from 'react-icons/md';
import { getPrice } from '../utils';
const imageStyle = {
    width: '100%',
    objectFit: 'contain' ,
    padding: 5,
    maxHeight: 300,
    minHeight: 200
};

function CardItem({item}){
    return (
        <Card cardName='me-3 mb-3'>
        <Card.Img style={imageStyle} variant="top" src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>
             <Badge bg='secondary'>{getPrice(item.price)}</Badge>
            </h6>
            <Button>
            <MdShoppingCart />
            </Button>
          </div>
        </Card.Body>
      </Card>
    );

}

export default CardItem;






import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';
import axios from 'axios';



function CardList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://eshop.reskimulud.my.id/products') 
            .then((res) => setProducts(res.data.data.products))
    }, []);
return (
    <Row xs={1} xl={4} sm={2} lg={3} md={3}>
{products.map((product) => (
    <Col key={product.id}>
    <CardItem item={product} />
    </Col>
) )}
    </Row>
);
}

export default CardList;